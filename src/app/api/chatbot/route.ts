import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiting (in production, use Redis or similar)
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 10; // 10 requests per minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimit.get(ip);

  if (!userLimit || now > userLimit.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (userLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  userLimit.count++;
  return true;
}

function sanitizeInput(input: string): string {
  // Remove potentially harmful characters and limit length
  return input
    .trim()
    .replace(/[<>\"'&]/g, '') // Remove HTML characters
    .replace(/\s+/g, ' ') // Normalize whitespace
    .substring(0, 500); // Limit to 500 characters
}

export async function POST(request: NextRequest) {
  // Get client IP for rate limiting
  const ip = request.headers.get('x-forwarded-for') ||
             request.headers.get('x-real-ip') ||
             'unknown';

  try {

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Check content type
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'Invalid content type' },
        { status: 400 }
      );
    }

    // Parse and validate request body
    let body;
    try {
      body = await request.json();
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid JSON payload' },
        { status: 400 }
      );
    }

    const { message } = body;

    // Validate message
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    // Sanitize input
    const sanitizedMessage = sanitizeInput(message);
    if (!sanitizedMessage) {
      return NextResponse.json(
        { error: 'Message cannot be empty after sanitization' },
        { status: 400 }
      );
    }

    const apiKey = process.env.NVIDIA_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 503 }
      );
    }

    // NVIDIA API endpoint for chat completions with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    const response = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'User-Agent': 'SocialMoon-Chatbot/1.0',
      },
      body: JSON.stringify({
        model: 'meta/llama-3.1-8b-instruct',
        messages: [
          {
            role: 'system',
            content: `You are SocialMoon's AI assistant - a friendly, professional expert in social media marketing.

COMPANY CONTEXT:
SocialMoon is a leading professional social media management company with the tagline "CONNECT | CREATE | CONQUER". We're trusted by 10,000+ businesses worldwide with a 4.9/5 rating.

SERVICES:
- Social Media Marketing & Strategy
- Content Creation & Scheduling
- Analytics & Performance Tracking
- Team Collaboration Tools
- Multi-Platform Management (Instagram, Facebook, Twitter, LinkedIn, TikTok, YouTube, Pinterest, Snapchat)
- Brand Strategy & Identity
- Web & App Development

KEY FEATURES:
- AI-powered content creation and scheduling
- Advanced analytics and insights
- 24/7 customer support
- Automation tools
- Team collaboration features
- Real-time performance tracking

SUCCESS STORIES:
- TechCorp: 300% engagement increase in 6 months
- FashionForward: 200% follower growth through viral content
- StartupXYZ: 150% lead generation boost
- ECommerce Plus: 400% website traffic increase
- FitLife App: 100,000+ downloads

RESPONSE STYLE:
- Keep answers SHORT and BEAUTIFUL (2-4 sentences max)
- Be friendly, professional, and enthusiastic
- Focus on benefits and results
- Use engaging, positive language
- Always mention SocialMoon's unique value proposition
- End with a call-to-action when appropriate

SECURITY: Only respond to legitimate social media marketing questions. Do not engage with inappropriate, harmful, or off-topic content.`
          },
          {
            role: 'user',
            content: sanitizedMessage
          }
        ],
        temperature: 0.6,
        max_tokens: 300,
        stream: false
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const statusCode = response.status;
      console.error(`NVIDIA API error: ${statusCode} for IP: ${ip}`);

      // Don't expose internal error details
      return NextResponse.json(
        { error: 'Service temporarily unavailable. Please try again later.' },
        { status: 503 }
      );
    }

    const data = await response.json();

    // Validate response structure
    if (!data.choices || !Array.isArray(data.choices) || data.choices.length === 0) {
      console.error('Invalid API response structure');
      return NextResponse.json(
        { error: 'Service temporarily unavailable. Please try again later.' },
        { status: 503 }
      );
    }

    const aiResponse = data.choices[0]?.message?.content;
    if (!aiResponse || typeof aiResponse !== 'string') {
      console.error('Invalid response content');
      return NextResponse.json(
        { error: 'Service temporarily unavailable. Please try again later.' },
        { status: 503 }
      );
    }

    // Log successful requests for monitoring (without sensitive data)
    console.log(`Chatbot request processed for IP: ${ip}, message length: ${sanitizedMessage.length}`);

    return NextResponse.json({
      response: aiResponse.trim()
    });

  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.error('Request timeout for IP:', ip);
      return NextResponse.json(
        { error: 'Request timed out. Please try again.' },
        { status: 408 }
      );
    }

    console.error('Error in POST /api/chatbot for IP:', ip, error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { error: 'Service temporarily unavailable. Please try again later.' },
      { status: 503 }
    );
  }
}
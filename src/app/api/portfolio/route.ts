import { NextRequest, NextResponse } from 'next/server';
import { PortfolioService } from '@/services/portfolio';

export async function GET() {
  try {
    const data = await PortfolioService.getPortfolio();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in GET /api/portfolio:', error);
    return NextResponse.json(
      { error: 'Failed to fetch portfolio' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const result = await PortfolioService.updatePortfolio(body);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in PUT /api/portfolio:', error);
    return NextResponse.json(
      { error: 'Failed to update portfolio' },
      { status: 500 }
    );
  }
}

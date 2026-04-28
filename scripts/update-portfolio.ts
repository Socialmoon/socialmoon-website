import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { connectToDatabase } from '@/database';
import Project from '@/models/Project';

const realProjects = [
  {
    id: 1,
    slug: 'real-time-chat-app',
    title: 'Real-Time Chat Application',
    description: 'A full-stack real-time chat application built with Next.js, Node.js, Socket.io, and MongoDB. Features include user authentication, chat rooms, typing indicators, read receipts, message history, emoji picker, and AI chatbot integration.',
    imageUrl: '/images/portfolio/real-time-chat.jpg',
    videoUrl: '',
    link: 'https://github.com/sainivaibhav742/real-time-chat-app',
    category: 'Full-Stack Development',
    client: 'Personal Project',
    duration: '3 months',
    technologies: ['Next.js 16', 'TypeScript', 'Socket.io', 'MongoDB', 'Node.js', 'Express.js', 'OpenAI API', 'JWT', 'Tailwind CSS'],
    results: 'Full-featured real-time communication platform',
    challenge: 'Building a scalable real-time chat system with persistent message history, user authentication, and AI integration while maintaining low latency and high reliability.',
    solution: 'Implemented WebSocket-based architecture using Socket.io for real-time bi-directional communication, combined with JWT authentication and MongoDB for data persistence. Integrated OpenAI API for intelligent chatbot responses.',
    process: [
      'Designed scalable real-time architecture with Socket.io and Express backend',
      'Implemented JWT-based authentication system with secure password hashing',
      'Built responsive Next.js frontend with TypeScript for type safety',
      'Integrated MongoDB with Mongoose for efficient message storage and retrieval',
      'Added AI chatbot feature using OpenAI API for enhanced user experience',
      'Implemented typing indicators, read receipts, and emoji picker functionality'
    ],
    images: ['/images/portfolio/real-time-chat-1.jpg', '/images/portfolio/real-time-chat-2.jpg', '/images/portfolio/real-time-chat-3.jpg']
  },
  {
    id: 2,
    slug: 'ai-resume-screener',
    title: 'AI Resume Screener',
    description: 'An advanced AI-powered resume screening platform that leverages cutting-edge NLP and machine learning to revolutionize HR recruitment processes. Built with NVIDIA AI integration for intelligent analysis and automated candidate evaluation.',
    imageUrl: '/images/portfolio/ai-resume-screener.jpg',
    videoUrl: '',
    link: 'https://github.com/sainivaibhav742/ai-resume-screener',
    category: 'AI/ML Development',
    client: 'HR Tech Solution',
    duration: '4 months',
    technologies: ['Python', 'NLP', 'NVIDIA Llama 3.1', 'MongoDB', 'TensorFlow', 'Flask', 'React', 'OpenAI', 'Chart.js'],
    results: 'Automated resume screening with 85% accuracy',
    challenge: 'HR teams struggled with manually reviewing hundreds of resumes, leading to inefficient hiring processes and potential bias in candidate selection.',
    solution: 'Developed an AI-powered platform using advanced NLP and NVIDIA Llama 3.1 for intelligent resume parsing, semantic job matching, and automated candidate ranking with bias detection.',
    process: [
      'Implemented multi-format resume parsing (PDF, DOCX, TXT) with intelligent data extraction',
      'Built semantic similarity engine for job-candidate matching beyond keyword searches',
      'Integrated NVIDIA Llama 3.1 for AI-powered resume summaries and insights',
      'Created comprehensive HR dashboard with real-time analytics and candidate ranking',
      'Developed bias detection algorithms to ensure fair candidate evaluation',
      'Added AI chatbot assistant for HR guidance and best practices'
    ],
    images: ['/images/portfolio/ai-resume-screener-1.jpg', '/images/portfolio/ai-resume-screener-2.jpg']
  },
  {
    id: 3,
    slug: 'image-captioning-cnn-lstm',
    title: 'Image Captioning with CNN-LSTM',
    description: 'A deep learning model that generates human-like image captions using Convolutional Neural Networks (CNN) for image feature extraction and Long Short-Term Memory (LSTM) networks for sequence generation. Trained on Flickr8k dataset.',
    imageUrl: '/images/portfolio/image-captioning.jpg',
    videoUrl: '',
    link: 'https://github.com/sainivaibhav742/Image-Captioning-with-CNN-LSTM',
    category: 'AI/ML Development',
    client: 'Research Project',
    duration: '2 months',
    technologies: ['TensorFlow', 'Keras', 'InceptionV3', 'LSTM', 'Flask', 'OpenCV', 'Python', 'NumPy'],
    results: 'Achieved 65% BLEU score on Flickr8k dataset',
    challenge: 'Automatically generating meaningful and contextually accurate descriptions for images requires understanding both visual features and natural language semantics.',
    solution: 'Combined InceptionV3 CNN for robust image feature extraction with LSTM decoder networks for sequential caption generation, creating a Flask-based web interface for real-time predictions.',
    process: [
      'Preprocessed Flickr8k dataset with image augmentation and text tokenization',
      'Implemented InceptionV3 pretrained CNN for high-level feature extraction',
      'Built LSTM-based sequence decoder with attention mechanism',
      'Trained end-to-end model with custom vocabulary and tokenizer',
      'Developed Flask web interface for image upload and caption generation',
      'Optimized model performance with dropout and regularization techniques'
    ],
    images: ['/images/portfolio/image-captioning-1.jpg', '/images/portfolio/image-captioning-2.jpg', '/images/portfolio/image-captioning-3.jpg']
  },
  {
    id: 4,
    slug: 'sign-language-translator',
    title: 'Sign Language Translator',
    description: 'A real-time AI-powered system that translates hand gestures (ASL) into English text and speech using computer vision and deep learning. Built with TensorFlow, OpenCV, and pyttsx3 for text-to-speech conversion.',
    imageUrl: '/images/portfolio/sign-language.jpg',
    videoUrl: '',
    link: 'https://github.com/sainivaibhav742/sign_language_translator',
    category: 'AI/ML Development',
    client: 'Accessibility Project',
    duration: '2 months',
    technologies: ['TensorFlow', 'OpenCV', 'CNN', 'pyttsx3', 'Python', 'NumPy', 'Webcam Integration'],
    results: 'Real-time ASL recognition with 90% accuracy',
    challenge: 'Creating an accessible communication tool for the deaf and hard-of-hearing community by translating American Sign Language gestures into spoken English in real-time.',
    solution: 'Developed a CNN-based gesture recognition system with real-time webcam processing, word construction from individual letters, and text-to-speech output for seamless communication.',
    process: [
      'Collected and preprocessed ASL alphabet dataset (A-Z) for model training',
      'Built CNN architecture optimized for real-time hand gesture recognition',
      'Integrated OpenCV for webcam capture and hand detection preprocessing',
      'Implemented word construction logic from sequential letter predictions',
      'Added pyttsx3 text-to-speech engine for audio output',
      'Optimized model for low-latency inference on standard hardware'
    ],
    images: ['/images/portfolio/sign-language-1.jpg', '/images/portfolio/sign-language-2.jpg']
  },
  {
    id: 5,
    slug: 'stock-price-predictor',
    title: 'Stock Price Predictor with LSTM',
    description: 'A machine learning application that predicts future stock prices using LSTM (Long Short-Term Memory) neural networks. Features a React frontend with Tailwind CSS and Flask backend, fetching real-time data from Yahoo Finance.',
    imageUrl: '/images/portfolio/stock-predictor.jpg',
    videoUrl: '',
    link: 'https://github.com/sainivaibhav742/Stock-Price-Predictor-with-LSTM',
    category: 'AI/ML Development',
    client: 'FinTech Project',
    duration: '2 months',
    technologies: ['LSTM', 'TensorFlow', 'Keras', 'Flask', 'React', 'Tailwind CSS', 'yfinance', 'pandas', 'scikit-learn'],
    results: 'Predicted stock trends with 78% directional accuracy',
    challenge: 'Stock price prediction is inherently complex due to market volatility and numerous influencing factors. Traditional models struggle to capture temporal dependencies in time-series data.',
    solution: 'Implemented LSTM neural network architecture specifically designed for sequential data, combined with Yahoo Finance API integration for real-time data and an interactive React interface for user-friendly predictions.',
    process: [
      'Fetched historical stock data from Yahoo Finance using yfinance API',
      'Preprocessed time-series data with normalization and sequence windowing',
      'Designed and trained multi-layer LSTM model for temporal pattern recognition',
      'Built Flask REST API for model serving and prediction endpoints',
      'Developed responsive React frontend with interactive charts and stock ticker input',
      'Implemented error handling and model persistence for production deployment'
    ],
    images: ['/images/portfolio/stock-predictor-1.jpg', '/images/portfolio/stock-predictor-2.jpg']
  },
  {
    id: 6,
    slug: 'cloud-cost-optimizer',
    title: 'Cloud Cost Optimizer Dashboard',
    description: 'A comprehensive cloud cost monitoring and optimization dashboard that helps users track, analyze, and optimize their cloud spending across AWS, GCP, and Azure. Features AI-powered insights and anomaly detection.',
    imageUrl: '/images/portfolio/cloud-optimizer.jpg',
    videoUrl: '',
    link: 'https://github.com/sainivaibhav742/Cloud-Cost-Optimizer-Dashboard',
    category: 'Full-Stack Development',
    client: 'Enterprise Solution',
    duration: '5 months',
    technologies: ['React', 'Flask', 'MongoDB', 'OpenAI', 'Chart.js', 'AWS API', 'GCP API', 'Azure API', 'Docker'],
    results: 'Reduced cloud costs by 30% through optimization',
    challenge: 'Organizations struggle to monitor and optimize cloud spending across multiple providers, leading to budget overruns and inefficient resource utilization.',
    solution: 'Built a unified multi-cloud dashboard with real-time cost tracking, AI-powered optimization recommendations, anomaly detection, and automated budget alerts across AWS, GCP, and Azure.',
    process: [
      'Integrated AWS Cost Explorer, GCP Billing, and Azure Cost Management APIs',
      'Implemented real-time data collection pipeline for daily cost tracking',
      'Built anomaly detection algorithms to identify unusual spending patterns',
      'Integrated OpenAI API for intelligent cost optimization recommendations',
      'Developed React dashboard with Chart.js for interactive visualizations',
      'Added budget management, forecasting, and alert notification systems',
      'Containerized application with Docker for easy deployment'
    ],
    images: ['/images/portfolio/cloud-optimizer-1.jpg', '/images/portfolio/cloud-optimizer-2.jpg', '/images/portfolio/cloud-optimizer-3.jpg']
  }
];

async function updatePortfolio() {
  try {
    console.log('Connecting to database...');
    await connectToDatabase();

    console.log('Clearing existing projects...');
    await Project.deleteMany({});

    console.log('Inserting new projects...');
    await Project.insertMany(realProjects);

    console.log('✅ Portfolio updated successfully!');
    console.log(`   Added ${realProjects.length} projects`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error updating portfolio:', error);
    process.exit(1);
  }
}

updatePortfolio();

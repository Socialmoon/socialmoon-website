import { NextResponse } from 'next/server';
import { CASE_STUDIES, CASE_STUDIES_TITLE } from '@/lib/config/case-studies-catalog';

export async function GET() {
  return NextResponse.json({
    title: CASE_STUDIES_TITLE,
    caseStudies: CASE_STUDIES,
  });
}

const READ_ONLY_RESPONSE = {
  error: 'Case studies are now static and managed in src/lib/config/case-studies-catalog.ts',
};

export async function POST() {
  return NextResponse.json(READ_ONLY_RESPONSE, { status: 405 });
}

export async function PUT() {
  return NextResponse.json(READ_ONLY_RESPONSE, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json(READ_ONLY_RESPONSE, { status: 405 });
}

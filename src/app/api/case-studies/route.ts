import { NextRequest, NextResponse } from 'next/server';
import { CaseStudiesService } from '@/services/case-studies';

export async function GET() {
  try {
    const data = await CaseStudiesService.getCaseStudies();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in GET /api/case-studies:', error);
    // Return a valid structure even on error
    return NextResponse.json(
      { 
        title: 'Case Studies',
        caseStudies: [],
        error: 'Failed to fetch case studies' 
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await CaseStudiesService.createCaseStudy(body);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/case-studies:', error);
    return NextResponse.json(
      { error: 'Failed to create case study' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();

    // Check if this is a full data update (admin panel) or single case study update
    if (body.caseStudies && body.title) {
      // Full data update from admin panel
      const result = await CaseStudiesService.updateCaseStudies(body);
      return NextResponse.json(result);
    }

    // Single case study update
    const { id } = body;
    if (!id) {
      return NextResponse.json(
        { error: 'Case study ID is required' },
        { status: 400 }
      );
    }

    const result = await CaseStudiesService.updateCaseStudy(id, body);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in PUT /api/case-studies:', error);
    return NextResponse.json(
      { error: 'Failed to update case study' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Case study ID is required' },
        { status: 400 }
      );
    }

    const result = await CaseStudiesService.deleteCaseStudy(id);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in DELETE /api/case-studies:', error);
    return NextResponse.json(
      { error: 'Failed to delete case study' },
      { status: 500 }
    );
  }
}

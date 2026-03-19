import { NextResponse } from 'next/server';
import { getBlogFiles } from '@/lib/content';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const files = getBlogFiles();
    return NextResponse.json(files);
  } catch (error) {
    console.error('Error fetching blog files:', error);
    return NextResponse.json([], { status: 200 });
  }
}

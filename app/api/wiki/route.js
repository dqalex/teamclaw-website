import { NextResponse } from 'next/server';
import { getWikiFiles } from '@/lib/content';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const files = getWikiFiles();
    return NextResponse.json(files);
  } catch (error) {
    console.error('Error fetching wiki files:', error);
    return NextResponse.json([], { status: 200 });
  }
}

import { NextResponse } from 'next/server';
import { getBlogContent } from '@/lib/content';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }
  
  try {
    const content = await getBlogContent(id);
    return NextResponse.json(content);
  } catch (error) {
    console.error('Error fetching blog content:', error);
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
}

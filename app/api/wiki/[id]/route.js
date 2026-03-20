import { NextResponse } from 'next/server';
import { getWikiContent } from '@/lib/content';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  try {
    const content = await getWikiContent(id);
    return NextResponse.json(content, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error fetching wiki content:', error);
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
}

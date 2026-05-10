import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@/payload.config';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const payload = await getPayload({ config });
    const insights = await payload.find({
      collection: 'insights',
      limit: 100,
      sort: '-publishedAt',
    });

    return NextResponse.json(insights.docs);
  } catch (error) {
    console.error('Error fetching insights:', error);
    return NextResponse.json([]);
  }
}

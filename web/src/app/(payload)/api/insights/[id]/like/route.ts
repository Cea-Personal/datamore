import { getPayloadClient } from '@/_(payload)/payload-client'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const payload = await getPayloadClient()

  try {
    const insight = await payload.findByID({
      collection: 'insights',
      id: parseInt(id),
    })

    if (!insight) {
      return NextResponse.json({ error: 'Insight not found' }, { status: 404 })
    }

    const updatedInsight = await payload.update({
      collection: 'insights',
      id: parseInt(id),
      data: {
        likes: (insight.likes || 0) + 1,
      },
    })

    return NextResponse.json({ likes: updatedInsight.likes })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update likes' }, { status: 500 })
  }
}
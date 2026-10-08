import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { workExamples } from '@data/v1'
import { WorkOverview, WorkDetail } from '../../components/WorkPages'

export const metadata: Metadata = { title: 'Work & Approaches | Datamore', description: 'Hypothetical approaches to data and AI business problems, clearly distinguished from completed work.' }

export default async function WorkPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params
  if (!slug?.length) return <WorkOverview />
  const example = workExamples.find(item => item.slug === slug[0])
  if (slug.length !== 1 || !example) notFound()
  return <WorkDetail example={example} />
}

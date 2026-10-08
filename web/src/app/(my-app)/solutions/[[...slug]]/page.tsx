import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { solutions } from '@data/v1'
import { SolutionsOverview, SolutionDetail } from '../../components/SolutionPages'

type Props = { params: Promise<{ slug?: string[] }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const solution = solutions.find(item => item.slug === slug?.[0])
  return { title: `${solution?.title || 'Solutions'} | Datamore`, description: solution?.description || 'Data & Analytics and AI Automation for growing organizations.' }
}

export default async function SolutionsPage({ params }: Props) {
  const { slug } = await params
  if (!slug?.length) return <SolutionsOverview />
  const solution = solutions.find(item => item.slug === slug[0])
  if (slug.length !== 1 || !solution) notFound()
  return <SolutionDetail solution={solution} />
}

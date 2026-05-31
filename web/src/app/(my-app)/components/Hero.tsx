// src/components/Hero.tsx
import Link from 'next/link'
import Image from 'next/image'

interface HeroData {
  title: string
  subtitle: string
  buttons: Array<{
    label: string
    variant: string
    url: string
  }>
  image: {
    alt: string
    url: string
  }
  badge?: {
    label: string
    caption: string
    icon: string
  }
}

export default function Hero({ data }: { data: HeroData }) {
  return (
    <>
      <header className="relative px-margin-mobile md:px-margin-desktop py-16 md:py-32 max-w-container-max mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-7">
            <h1 className="text-display-lg-mobile md:text-display-lg text-primary mb-6" dangerouslySetInnerHTML={{ __html: data.title }}>
            </h1>
            <p className="text-body-lg text-on-surface-variant mb-10 max-w-xl">
              {data.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              {data.buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.url}
                  className={button.variant === 'primary'
                     ? 'glassy-button text-on-primary px-8 py-4 rounded-lg text-label-lg'
                    : 'border border-outline-variant hover:border-secondary transition-colors text-primary px-8 py-4 rounded-lg text-label-lg'}
                >
                  {button.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:col-span-5 relative mt-12 md:mt-0">
            <div className="aspect-square rounded-2xl bg-surface-container-highest flex items-center justify-center p-6 overflow-hidden ambient-shadow">
              <Image
                alt={data.image.alt}
                src={data.image.url}
                className="w-full h-full object-cover object-[18%_50%] rounded-xl"
                width={800}
                height={800}
                priority
              />
            </div>
            {data.badge && (
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl ambient-shadow hidden lg:block border border-outline-variant/30">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary text-4xl">
                    {data.badge.icon}
                  </span>
                  <div>
                    <div className="text-label-md text-primary">{data.badge.label}</div>
                    <div className="text-caption text-on-surface-variant">{data.badge.caption}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

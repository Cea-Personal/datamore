import Link from 'next/link'

export function FooterLinkList({ links }: { links: any[] }) {

  return (

    <ul className="space-y-4">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-body-md text-on-primary-container/90 hover:text-secondary transition-all"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>

  )

}
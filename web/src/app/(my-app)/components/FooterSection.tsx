import Link from 'next/link'

export function FooterSection({ title, children }: any) {

  return (

    <div>

      <h6 className="text-label-md mb-6 text-white uppercase tracking-wider">

        {title}

      </h6>

      {children}

    </div>

  )

}
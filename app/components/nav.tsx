import Link from 'next/link'

const navItems = {
  '/blog': {
    name: 'blog',
  },

  '/photos': {
    name: 'photos',
  },  
  '/contact': {
    name: 'contact',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-2 tracking-tight">
      <div className="lg:sticky lg:top-20">

        
        <nav
          className="flex flex-row items-start relative align-middle px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative mb-4"
          id="nav"
        >

      <h1 className="text-2xl pt-0.5 pr-5 font-semibold">
        matgilbert.com
      </h1>
          <div className="flex flex-row flex-row-reverse space-x-0 items-baseline grow">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}

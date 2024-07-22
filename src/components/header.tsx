import Image from 'next/image'
import Link from 'next/link'
import { Cart } from './cart'

export function Header(): JSX.Element {
  return (
    <header className="bg-background border-b border-muted px-4 md:px-6 py-6 flex justify-center">
      <div className="flex w-full max-w-7xl items-center justify-between">
        <div className="flex items-center gap-12">
          <Link
            href="/"
            className="flex w-full max-w-20 items-center gap-2"
            prefetch={false}
          >
            <Image
              src={'/logo_allu.png'}
              alt="allu"
              className="w-full h-full object-contain"
              width={0}
              height={0}
              sizes="100vw"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Início
            </Link>
          </nav>
        </div>
        <Cart />
      </div>
    </header>
  )
}

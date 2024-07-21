import logoAllu from '@/assets/logo_allu.png'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MinusIcon, PlusIcon, ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

export function Header() {
  return (
    <header className="bg-background border-b border-muted px-4 md:px-6 py-3 flex justify-center">
      <div className="flex w-full max-w-7xl items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <Image src={logoAllu} alt="allu" className="max-w-20" />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Início
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Sobre Nós
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Contato
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCartIcon className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs font-medium">
                  3
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Carrinho de Compras</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/placeholder.svg"
                      alt="Produto 1"
                      width={48}
                      height={48}
                      className="rounded-md"
                    />
                    <div>
                      <div className="font-medium">Produto 1</div>
                      <div className="text-muted-foreground text-sm">
                        R$ 49,99
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost">
                      <MinusIcon className="w-4 h-4" />
                    </Button>
                    <span>1</span>
                    <Button size="icon" variant="ghost">
                      <PlusIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/placeholder.svg"
                      alt="Produto 2"
                      width={48}
                      height={48}
                      className="rounded-md"
                    />
                    <div>
                      <div className="font-medium">Produto 2</div>
                      <div className="text-muted-foreground text-sm">
                        R$ 29,99
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost">
                      <MinusIcon className="w-4 h-4" />
                    </Button>
                    <span>2</span>
                    <Button size="icon" variant="ghost">
                      <PlusIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex items-center justify-between">
                  <span>Total:</span>
                  <span className="font-medium">R$ 109,98</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button className="w-full">Finalizar Compra</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

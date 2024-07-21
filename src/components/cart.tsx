'use client'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useCart } from '@/hooks/use-cart'
import { useClickOutside } from '@/hooks/use-click-outside'
import { formatCurrencyToBRL } from '@/utils/format-currency-to-brl'
import { ShoppingCartIcon, Trash2Icon } from 'lucide-react'
import { useRef, useState } from 'react'
import { Button } from './ui/button'

export function Cart() {
  const { cart, removeFromCart } = useCart()

  const totalAmount = cart.reduce(
    (total, item) => total + item.annualPrice * item.quantity,
    0,
  )

  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  useClickOutside<HTMLDivElement>({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  })

  return (
    <DropdownMenu open={isOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(true)}
          className="relative"
        >
          <ShoppingCartIcon className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs font-medium">
            {cart.length}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        ref={dropdownRef}
        align="end"
        className="w-full min-w-[500px]"
      >
        <DropdownMenuLabel>Carrinho de Compras</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {cart.map((item) => (
          <DropdownMenuItem key={item.id}>
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={item.images[0].url} />
                </Avatar>
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-muted-foreground text-sm">
                    {formatCurrencyToBRL(item.annualPrice)}
                  </div>
                </div>
              </div>
              <Button variant="outline" onClick={() => removeFromCart(item.id)}>
                <Trash2Icon className="size-4 text-destructive" />
              </Button>
            </div>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex items-center justify-between gap-2">
            <span>Total:</span>
            <span className="font-medium">R$ {totalAmount.toFixed(2)}</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button className="w-full">Finalizar Compra</Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

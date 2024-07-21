'use client'

import { CartProvider } from '@/contexts/cart-context'
import { queryClient } from '@/services/query-client'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

interface RootProviderProps {
  children: ReactNode
}

export function RootProvider({ children }: RootProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>{children}</CartProvider>
    </QueryClientProvider>
  )
}

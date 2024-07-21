'use client'

import { getProducts } from '@/api/products/get-products'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { formatCurrencyToBRL } from '@/utils/format-currency-to-brl'
import { useInfiniteQuery } from '@tanstack/react-query'
import { Loader2Icon, SearchIcon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'
import { SkeletonCard } from './components/skeleton-card'

export default function HomePage() {
  const router = useRouter()

  const [search, setSearch] = useState('')

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setTimeout(() => setSearch(e.target.value), 1500)
  }

  const {
    data: productsPages,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['products', search],
    queryFn: ({ pageParam }) =>
      getProducts({
        page: pageParam,
        perPage: 6,
        search,
      }),
    getNextPageParam: (lastPage) => {
      if (lastPage.page !== lastPage.totalPages) {
        return Number(lastPage.page) + 1
      }
    },
  })

  const products = productsPages
    ? productsPages.pages.flatMap((page) => page.products)
    : []

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        fetchNextPage()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [fetchNextPage])

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-8">
      <div className="flex flex-col items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold">Catálogo de Produtos</h1>
        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar produtos..."
            onChange={handleSearch}
            className="w-full bg-background shadow-none appearance-none pl-8 md:w-[420px]"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-12 gap-x-8">
        {products.length > 0
          ? products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col bg-card h-full rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border"
              >
                <div className="bg-zinc-200">
                  <Image
                    src="/placeholder.svg"
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-[200px] object-cover"
                  />
                </div>
                <div className="flex flex-col h-full justify-between p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 my-2">
                    {product.technicalDetails}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-primary font-semibold">
                      {formatCurrencyToBRL(product.annualValue)}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => router.push(`/product/${product.id}`)}
                    >
                      Ver detalhes
                    </Button>
                  </div>
                </div>
              </div>
            ))
          : Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
      </div>
      {isFetchingNextPage && (
        <div className="mt-8 flex justify-center">
          <Loader2Icon size={24} className="animate-spin text-foreground" />
        </div>
      )}
    </div>
  )
}

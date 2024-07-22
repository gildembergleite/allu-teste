'use client'

import { getProducts } from '@/api/products/get-products'
import { useInfiniteQuery } from '@tanstack/react-query'
import { Loader2Icon } from 'lucide-react'
import { ChangeEvent, useEffect, useState } from 'react'
import { ProductCard } from './components/product-card'
import { SearchProducts } from './components/search'
import { SkeletonCard } from './components/skeleton-card'

export default function HomePage() {
  const [search, setSearch] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null,
  )

  function handleChangeSearch(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    if (typingTimeout) clearTimeout(typingTimeout)
    setTypingTimeout(setTimeout(() => setSearch(value), 1000))
  }

  function handleChangeCategory(category: string) {
    if (category === 'all') {
      return setCategoryId('')
    }

    setCategoryId(category)
  }

  const {
    data: productsPages,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['products', search, categoryId],
    queryFn: ({ pageParam }) =>
      getProducts({
        page: pageParam,
        perPage: 6,
        search,
        categoryId,
      }),
    getNextPageParam: (lastPage) => {
      if (
        lastPage.products.length > 0 &&
        lastPage.page !== lastPage.totalPages
      ) {
        return Number(lastPage.page) + 1
      }
    },
  })

  const products = productsPages
    ? productsPages.pages.flatMap((page) => page.products)
    : []

  useEffect(() => {
    function handleScroll() {
      const isFinalPage =
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      if (isFinalPage) fetchNextPage()
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [fetchNextPage])

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-8">
      <div className="flex flex-col items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold">Catálogo de Produtos</h1>
        <SearchProducts
          inputSearchFn={handleChangeSearch}
          categorySearchFn={handleChangeCategory}
        />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
        {!productsPages &&
          Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        {productsPages && products.length === 0 ? (
          <div className="flex col-span-2 w-full h-full min-h-[calc(100vh-470px)] justify-center items-center">
            Nao existem resultados!
          </div>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        )}
      </div>
      {isFetchingNextPage && (
        <div className="mt-8 flex justify-center">
          <Loader2Icon size={24} className="animate-spin text-foreground" />
        </div>
      )}
    </div>
  )
}

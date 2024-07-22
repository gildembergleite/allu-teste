'use client'

import { getCategories } from '@/api/categories/get-categories'
import { Input } from '@/components/ui/input'
import { useQuery } from '@tanstack/react-query'
import { LayoutDashboard, SearchIcon } from 'lucide-react'
import Image from 'next/image'
import { ChangeEvent } from 'react'

interface SearchProducts {
  inputSearchFn: (e: ChangeEvent<HTMLInputElement>) => void
  categorySearchFn: (category: string) => void
}

export function SearchProducts({
  inputSearchFn,
  categorySearchFn,
}: SearchProducts) {
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
  })

  return (
    <div className="relative w-full">
      <SearchIcon className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Buscar produtos..."
        onChange={inputSearchFn}
        className="w-full bg-background shadow-none appearance-none pl-8"
      />
      <div className="flex w-full justify-center gap-6 pt-6">
        <button
          onClick={() => categorySearchFn('all')}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex justify-center items-center lg:w-20 lg:h-20 rounded-full border p-4 hover:bg-zinc-100 transition-all duration-300">
            <LayoutDashboard size={32} className="text-primary" />
          </div>
          <p className="capitalize hover:underline">Todas</p>
        </button>
        {categories?.map((category) => (
          <button
            key={category.id}
            onClick={() => categorySearchFn(category.id)}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-20 h-20 rounded-full border p-4 hover:bg-zinc-100 transition-all duration-300">
              <Image
                src={category.previewImageUrl}
                alt=""
                className="w-full h-full object-contain"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <p className="capitalize hover:underline">{category.name}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

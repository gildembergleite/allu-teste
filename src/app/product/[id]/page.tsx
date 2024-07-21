'use client'

import { getProduct } from '@/api/products/get-product'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { formatCurrencyToBRL } from '@/utils/format-currency-to-brl'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'

interface ProductDetailsPageProps {
  params: {
    id: string
  }
}

export default function ProductDetailsPage({
  params: { id },
}: ProductDetailsPageProps) {
  const { data: product } = useQuery({
    queryKey: [`product-${id}`, id],
    queryFn: () => getProduct({ id }),
  })

  return (
    <main className="w-full h-full min-h-[calc(100vh-160px)] max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-col gap-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">{product?.name}</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Carousel className="rounded-lg overflow-hidden">
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/placeholder.svg"
                  alt="Product Image 1"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover bg-zinc-100"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/placeholder.svg"
                  alt="Product Image 2"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover bg-zinc-100"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/placeholder.svg"
                  alt="Product Image 3"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover bg-zinc-100"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="flex flex-col justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Descrição</h2>
              <p className="text-muted-foreground mt-2">
                {product?.technicalDetails}
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Planos</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Mensal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">
                        {formatCurrencyToBRL(19)}
                      </span>
                      <span className="text-muted-foreground">/mês</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Adicionar ao carrinho</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Anual</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">
                        {formatCurrencyToBRL(199)}
                      </span>
                      <span className="text-muted-foreground">/year</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Adicionar ao carrinho</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

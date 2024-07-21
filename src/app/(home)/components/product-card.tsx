import { Product } from '@/@types/product'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'
import { formatCurrencyToBRL } from '@/utils/format-currency-to-brl'
import { ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function ProductCard(product: Product) {
  const { addToCart } = useCart()
  const router = useRouter()

  return (
    <div className="flex flex-col bg-card h-full rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border">
      <div className="w-full h-[200px] p-4">
        <Link
          href={`/product/${product.id}`}
          className="flex justify-center items-center w-full h-full"
        >
          <Image
            src={product.photos[0]}
            alt={product.name}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-contain hover:scale-110 transition-all duration-300"
          />
        </Link>
      </div>
      <div className="flex flex-col h-full justify-between p-4">
        <h3 className="text-lg font-semibold">
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 my-2">
          {product.technicalDetails}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-primary font-semibold">
            {formatCurrencyToBRL(product.annualValue)}
          </span>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => router.push(`/product/${product.id}`)}
            >
              Ver detalhes
            </Button>
            <Button
              size="sm"
              variant="default"
              onClick={() => addToCart(product)}
            >
              <ShoppingCartIcon size={14} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

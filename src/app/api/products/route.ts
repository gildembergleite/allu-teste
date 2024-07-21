import { NextResponse } from 'next/server'
import { products } from './data-base-mock'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get('search') || ''
  const page = parseInt(searchParams.get('page') || '1')
  const perPage = parseInt(searchParams.get('perPage') || '10')

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.technicalDetails.toLowerCase().includes(search.toLowerCase()),
  )

  const total = filteredProducts.length
  const totalPages = Math.ceil(total / perPage)
  const startIndex = (page - 1) * perPage
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + perPage,
  )

  await new Promise((resolve) => setTimeout(resolve, 500))

  return NextResponse.json({
    total,
    totalPages,
    page,
    perPage,
    products: paginatedProducts,
  })
}

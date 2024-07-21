import { NextResponse } from 'next/server'
import { products } from './data-base-mock'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query') || ''
  const page = parseInt(searchParams.get('page') || '1')
  const perPage = parseInt(searchParams.get('perPage') || '10')

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.technicalDetails.toLowerCase().includes(query.toLowerCase()),
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

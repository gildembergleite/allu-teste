import { NextResponse } from 'next/server'
import { products } from '../data-base-mock'

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params

  const product = products.find((product) => product.id === Number(id))

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  return NextResponse.json(product)
}

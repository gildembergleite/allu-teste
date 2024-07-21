import { Product } from '@/@types/product'
import { api } from '@/services/api'

interface GetProductsRequest {
  id: number | string
}
type GetProductsResponse = Product

export async function getProduct({ id }: GetProductsRequest) {
  return await api.get<GetProductsResponse>(`/products/${id}`)
}

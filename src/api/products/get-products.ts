import { Product } from '@/@types/product'
import { api } from '@/services/api'

interface GetProductsRequest {
  page?: number | string
  perPage?: number | string
  search?: string
}
interface GetProductsResponse {
  total: number
  totalPages: number
  page: number
  perPage: number
  products: Product[]
}

export async function getProducts(props: GetProductsRequest) {
  return await api.get<GetProductsResponse>('/products', {
    params: { ...props },
  })
}

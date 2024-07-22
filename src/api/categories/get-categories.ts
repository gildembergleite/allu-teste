import { Category } from '@/@types/category'
import { api } from '@/services/api'

type GetCategoriesResponse = Array<Category>

export async function getCategories() {
  return await api.get<GetCategoriesResponse>('/categories')
}

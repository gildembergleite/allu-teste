import { BaseApi } from '@/entities/base-api'

export const api = new BaseApi({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL ?? '',
})

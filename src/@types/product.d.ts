export type Product = {
  id: number
  name: string
  technicalDetails: string
  annualPrice: number
  monthlyPrice: number
  images: {
    id: string
    url: string
    productId: string
  }[]
}

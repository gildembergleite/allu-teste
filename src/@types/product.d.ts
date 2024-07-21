export type Product = {
  id: number
  name: string
  technicalDetails: string
  annualValue: number
  images: {
    id: string
    url: string
    productId: string
  }[]
}

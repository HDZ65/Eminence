export type User = {
  id: string
  email: string
  name: string
  password: string
  isAdmin: boolean
  createdAt: Date
  updatedAt: Date
}

export type Product = {
  id: string
  name: string
  description: string
  price: number
  stock: number
  createdAt: Date
  updatedAt: Date
}

export type Order = {
  id: string
  userId: string
  status: string
  createdAt: Date
  updatedAt: Date
}

export type OrderItem = {
  id: string
  orderId: string
  productId: string
  quantity: number
  price: number
}


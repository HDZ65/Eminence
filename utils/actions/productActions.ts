'use server'

import prisma from '../db'
import { Product } from '@/types'

export async function getAllProducts() {
  const allProducts = await prisma.product.findMany()
  return allProducts
}

export async function getProductById(id: string) {
  const product = await prisma.product.findUnique({
    where: {
      id
    }
  })
  return product
}

export async function createProduct(product: Product) {
  const newProduct = await prisma.product.create({
    data: product
  })
  return newProduct
}

export async function updateProduct(id: string, product: Product) {
  const updatedProduct = await prisma.product.update({
    where: {
      id
    },
    data: product
  })
  return updatedProduct
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({
    where: {
      id
    }
  })
}


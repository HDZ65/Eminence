'use server'

import prisma from '../db'
import { Order } from '@/types'

export async function getAllOrders() {
  const allOrders = await prisma.order.findMany()
  return allOrders
}

export async function getOrderById(id: string) {
  const order = await prisma.order.findUnique({
    where: {
      id
    }
  })
  return order
}

export async function createOrder(order: Order) {
  const newOrder = await prisma.order.create({
    data: order
  })
  return newOrder
}

export async function updateOrder(id: string, order: Order) {
  const updatedOrder = await prisma.order.update({
    where: {
      id
    },
    data: order
  })
  return updatedOrder
}

export async function deleteOrder(id: string) {
  await prisma.order.delete({
    where: {
      id
    }
  })
}

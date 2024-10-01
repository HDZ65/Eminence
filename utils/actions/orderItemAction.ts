'use server'

import prisma from '../db'
import { OrderItem } from '@/types'

export async function getOrderItemById(id: string) {
  const orderItem = await prisma.orderItem.findUnique({
    where: {
      id
    }
  })
  return orderItem
}

export async function createOrderItem(orderItem: OrderItem) {
  const newOrderItem = await prisma.orderItem.create({
    data: orderItem
  })
  return newOrderItem
}

export async function updateOrderItem(id: string, orderItem: OrderItem) {
  const updatedOrderItem = await prisma.orderItem.update({
    where: {
      id
    },
    data: orderItem
  })
  return updatedOrderItem
}

export async function deleteOrderItem(id: string) {     
  await prisma.orderItem.delete({
    where: {
      id
    }
  })
}
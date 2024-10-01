'use server'

import prisma from '../db'
import { User } from '@/types'

export async function getAllUsers() {
  const allUsers = await prisma.user.findMany({
    orderBy: {
      name: 'asc'
    }
  })
  return allUsers
}

export async function getUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id
    }
  })
  return user
}

export async function createUser(user: User) {
  const newUser = await prisma.user.create({
    data: user
  })
  return newUser
}

export async function updateUser(id: string, user: User) {
  const updatedUser = await prisma.user.update({
    where: {
      id
    },
    data: user
  })
  return updatedUser
}

export async function deleteUser(id: string) {
  await prisma.user.delete({
    where: {
      id
    }
  })
}

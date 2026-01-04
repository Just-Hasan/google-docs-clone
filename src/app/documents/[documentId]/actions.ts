'use server'

import { auth, clerkClient } from '@clerk/nextjs/server'
import { ConvexHttpClient } from 'convex/browser'
import { Id } from '../../../../convex/_generated/dataModel'
import { api } from '../../../../convex/_generated/api'

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

type ClaimsWithOrg = {
  o?: { id?: string }
}

export async function getDocuments(ids: Id<'documents'>[]) {
  return await convex.query(api.documents.getByIds, { ids })
}

export async function getAllUsers() {
  const clerk = await clerkClient()
  return clerk.users.getUserList()
}

export async function getUsers() {
  const { sessionClaims } = await auth()
  const clerk = await clerkClient()

  const orgId = (sessionClaims as ClaimsWithOrg)?.o?.id

  if (!orgId) throw new Error('Organization not found')

  const response = await clerk.users.getUserList({
    organizationId: [orgId],
  })

  const users = response.data.map((user) => ({
    id: user.id,
    name:
      user.fullName ?? user.primaryEmailAddress?.emailAddress ?? ' Anonymous',
    avatar: user.imageUrl,
  }))

  return users
}

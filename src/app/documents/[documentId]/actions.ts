'use server'

import { auth, clerkClient } from '@clerk/nextjs/server'
import { ConvexHttpClient } from 'convex/browser'
import { Id } from '../../../../convex/_generated/dataModel'
import { api } from '../../../../convex/_generated/api'

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

export async function getDocuments(ids: Id<'documents'>[]) {
  return await convex.query(api.documents.getByIds, { ids })
}

export async function getAllUsers() {
  const clerk = await clerkClient()
  return clerk.users.getUserList()
}

interface ClerkSessionClaims {
  org_id?: string
  o?: { id: string }
}

export interface DocifyUser {
  id: string
  name: string
  avatar: string
}

export async function getUsers(): Promise<DocifyUser[]> {
  try {
    const { sessionClaims, userId } = await auth()
    const client = await clerkClient()
    const claims = sessionClaims as unknown as ClerkSessionClaims
    const orgId = claims?.org_id || claims?.o?.id
    if (orgId) {
      const response = await client.users.getUserList({
        organizationId: [orgId],
      })

      return response.data.map((user) => ({
        id: user.id,
        name:
          user.fullName ??
          user.primaryEmailAddress?.emailAddress ??
          'Anonymous',
        avatar: user.imageUrl,
      }))
    }

    if (userId) {
      const user = await client.users.getUser(userId)
      return [
        {
          id: user.id,
          name:
            user.fullName ??
            user.primaryEmailAddress?.emailAddress ??
            'Anonymous',
          avatar: user.imageUrl,
        },
      ]
    }

    return []
  } catch (error) {
    console.error(
      '[getUsers Error]:',
      error instanceof Error ? error.message : error,
    )
    return []
  }
}

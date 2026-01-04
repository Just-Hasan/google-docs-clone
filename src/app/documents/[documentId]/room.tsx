'use client'

import FullScreenLoader from '@/components/fullscreen-loader'
import { fetchQuery } from 'convex/nextjs'
import { useLiveblocksRoom } from '@/hooks/use-liveblocks-room'
import {
  ClientSideSuspense,
  LiveblocksProvider,
  RoomProvider,
} from '@liveblocks/react/suspense'
import { useParams, useRouter } from 'next/navigation'
import { ReactNode, useEffect, useMemo, useState } from 'react'
import { toast } from 'sonner'
import { Id } from '../../../../convex/_generated/dataModel'
import { getUsers } from './actions'
import { LEFT_MARGIN_DEFAULT, RIGHT_MARGIN_DEFAULT } from '@/constants/margins'
import { api } from '../../../../convex/_generated/api'
import { getUserColor } from '@/lib/utils'

type User = { id: string; name: string; avatar: string; color: string }

export function Room({
  children,
  documentId,
}: {
  children: ReactNode
  documentId: Id<'documents'>
}) {
  const params = useParams()
  const { canAccess, document, isLoading } = useLiveblocksRoom(documentId)
  const router = useRouter()
  const [users, setUsers] = useState<User[]>([])

  const fetchUsers = useMemo(
    () => async () => {
      try {
        const list = await getUsers()
        const usersWithColor: User[] = list.map((user) => ({
          ...user,
          color: getUserColor(user.name),
        }))
        setUsers(usersWithColor)
      } catch {
        toast.error('Failed to fetch users')
      }
    },
    [],
  )

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  useEffect(() => {
    if (!isLoading && !canAccess)
      throw new Error('You cannot access this document')
  }, [isLoading, canAccess, router])

  if (isLoading) return <FullScreenLoader label="Loading Document..." />

  if (!canAccess || !document)
    throw new Error('You cannot access this document')

  return (
    <LiveblocksProvider
      authEndpoint={async () => {
        const endpoint = '/api/liveblocks-auth'

        const response = await fetch(endpoint, {
          method: 'POST',
          body: JSON.stringify({ room: documentId }),
        })

        return await response.json()
      }}
      resolveUsers={({ userIds }) => {
        return userIds.map((userId) => users.find((user) => user.id === userId))
      }}
      resolveMentionSuggestions={({ text }) => {
        let filteredUsers = users

        if (text) {
          filteredUsers = users.filter((user) => {
            return user.name.toLowerCase().includes(text.toLowerCase())
          })
        }
        return filteredUsers.map((user) => user.id)
      }}
      resolveRoomsInfo={async ({ roomIds }) => {
        try {
          const documents = await fetchQuery(api.documents.getByIds, {
            ids: roomIds as Id<'documents'>[],
          })

          return documents.map((doc) => ({
            id: doc.id,
            name: doc.name,
            url: `/documents/${doc.id}`,
          }))
        } catch (error) {
          console.error('Failed to resolve rooms info:', error)
          return []
        }
      }}
    >
      <RoomProvider
        id={params.documentId as string}
        initialStorage={{
          leftMargin: LEFT_MARGIN_DEFAULT,
          rightMargin: RIGHT_MARGIN_DEFAULT,
        }}
      >
        <ClientSideSuspense
          fallback={<FullScreenLoader label="Room loading..." />}
        >
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  )
}

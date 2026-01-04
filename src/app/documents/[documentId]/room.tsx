'use client'

import FullScreenLoader from '@/components/fullscreen-loader'
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

type User = { id: string; name: string; avatar: string }

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
        setUsers(list)
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

  if (isLoading) return <div>Loading</div>

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
      resolveRoomsInfo={({ roomIds }) => {
        // Langsung ambil dari map yang sudah ada
        return roomIds.map((roomId) => {
          return {
            id: document._id,
            name: document.title || 'Document',
            url: `/documents/${roomId}`,
          }
        })
      }}
    >
      <RoomProvider
        id={params.documentId as string}
        initialStorage={{ leftMargin: 56, rightMargin: 56 }}
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

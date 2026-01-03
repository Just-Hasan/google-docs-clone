'use client'

import { useLiveblocksRoom } from '@/hooks/use-liveblocks-room'
import {
  ClientSideSuspense,
  LiveblocksProvider,
  RoomProvider,
} from '@liveblocks/react/suspense'
import { useParams, useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'
import { Id } from '../../../../convex/_generated/dataModel'
import FullScreenLoader from '@/components/fullscreen-loader'

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

  useEffect(() => {
    if (!isLoading && !canAccess)
      throw new Error('You cannot access this document')
  }, [isLoading, canAccess, router])

  if (isLoading) return <div>Loading</div>

  if (!canAccess || !document)
    throw new Error('You cannot access this document')

  return (
    <LiveblocksProvider authEndpoint={'/api/liveblocks-auth'}>
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<FullScreenLoader label="" />}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  )
}

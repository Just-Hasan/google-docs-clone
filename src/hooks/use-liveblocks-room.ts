import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { Id } from '../../convex/_generated/dataModel'
import { useUser, useOrganization } from '@clerk/nextjs'

export function useLiveblocksRoom(documentId: Id<'documents'> | undefined) {
  const { user } = useUser()
  const { organization } = useOrganization()
  const document = useQuery(
    api.documents.getById,
    documentId ? { id: documentId } : 'skip',
  )

  if (!documentId || !document || !user) {
    return {
      canAccess: false,
      isLoading: !document && documentId !== undefined,
      document: null,
    }
  }

  const isOwner = document.ownerId === user.id
  const isOrganizationMember =
    document.organizationId && document.organizationId === organization?.id

  return {
    canAccess: isOwner || isOrganizationMember,
    isLoading: false,
    document,
    isOwner,
    isOrganizationMember,
  }
}

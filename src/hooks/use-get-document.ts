import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { Id } from '../../convex/_generated/dataModel'

export function useGetDocument(id: Id<'documents'>) {
  const document = useQuery(api.documents.getById, { id })
  return document
}

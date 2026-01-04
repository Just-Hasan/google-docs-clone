import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'

export function useGetIds() {
  useQuery(api.documents.getByIds, {})
}

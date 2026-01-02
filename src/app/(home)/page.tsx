'use client'
import { usePaginatedQuery } from 'convex/react'
import Navbar from './navbar'
import TemplateGallery from './templates-gallery'
import { api } from '../../../convex/_generated/api'
import { DocumentsTable } from './documents-table'
import { useSearchParam } from '@/hooks/use-search-param'
const Home = () => {
  const [search, setSearch] = useSearchParam()
  const { status, results, loadMore } = usePaginatedQuery(
    api.documents.get,
    { search },
    { initialNumItems: 5 },
  )
  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed left-0 right-0 top-0 z-50 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplateGallery />
        <DocumentsTable
          documents={results}
          loadMore={loadMore}
          status={status}
        ></DocumentsTable>
      </div>
    </div>
  )
}

export default Home

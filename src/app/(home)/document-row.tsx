import { TableCell, TableRow } from '@/components/ui/table'
import { format } from 'date-fns'
import { Building2Icon, CircleUserIcon } from 'lucide-react'
import { SiGoogledocs } from 'react-icons/si'
import { Doc } from '../../../convex/_generated/dataModel'
import DocumentMenu from './document-menu'
import { useRouter } from 'next/navigation'

interface DocumentRowProps {
  document: Doc<'documents'>
}

const DocumentRow = ({ document }: DocumentRowProps) => {
  const router = useRouter()
  const onNewTabClick = (id: string) => {
    window.open(`/documents/${id}`, '_blank')
  }
  return (
    <TableRow
      onClick={() => router.push(`/documents/${document._id}`)}
      className="cursor-pointer"
    >
      <TableCell className="w-[50px]">
        <SiGoogledocs className="size-6 fill-blue-500" />
      </TableCell>
      <TableCell className="font-medium md:w-[45%]">
        {document?.title}
      </TableCell>
      <TableCell className="hidden items-center gap-2 text-muted-foreground md:flex">
        {document?.organizationId ? (
          <Building2Icon className="size-4" />
        ) : (
          <CircleUserIcon className="size-4" />
        )}
        {document?.organizationId ? 'Organization' : 'Personal'}
      </TableCell>
      <TableCell className="hidden text-muted-foreground md:table-cell">
        {document && format(new Date(document._creationTime), 'MMM dd, yyyy')}
      </TableCell>
      <TableCell className="flex justify-end">
        {/* */}
        <DocumentMenu
          documentId={document?._id}
          title={document?.title}
          onNewTab={onNewTabClick}
        />
      </TableCell>
    </TableRow>
  )
}

export default DocumentRow

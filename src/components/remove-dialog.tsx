'use client'

import { useMutation } from 'convex/react'
import { Id } from '../../convex/_generated/dataModel'
import { toast } from 'sonner'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog'
import { api } from '../../convex/_generated/api'
import { useState } from 'react'

interface RemoveDialogProps {
  documentId: Id<'documents'>
  children: React.ReactNode
}

const RemoveDialog = ({ documentId, children }: RemoveDialogProps) => {
  const remove = useMutation(api.documents.removeById)
  const [isDeleting, setIsDeleting] = useState(false)
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent onClick={(e) => e.stopPropagation()}>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone, This will permanently delete you
            documents
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={isDeleting}
            onClick={(e) => {
              e.stopPropagation()
              setIsDeleting(true)
              remove({ id: documentId })
                .catch(() => toast.error('Something went wrong'))
                .then(() => toast.success('Document removed'))
                .finally(() => {
                  setIsDeleting(false)
                })
            }}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default RemoveDialog

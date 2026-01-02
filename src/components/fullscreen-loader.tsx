import { LoaderIcon } from 'lucide-react'

const FullScreenLoader = ({ label }: { label?: string }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2">
      <LoaderIcon className="size-6 animate-spin text-muted-foreground" />
      {label && <p className="text-sm text-muted-foreground">{label}</p>}
    </div>
  )
}

export default FullScreenLoader

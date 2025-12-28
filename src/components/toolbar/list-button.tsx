import { useEditorStore } from '@/store/use-editor-store'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { ListIcon, ListOrderedIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const ListButton = () => {
  const { editor } = useEditorStore()
  const lists = [
    {
      label: 'Bullet List',
      icon: ListIcon,
      isActive: () => editor?.isActive('bulletList'),
      onclick: () => editor?.chain().focus().toggleBulletList().run(),
    },
    {
      label: 'Ordered List',
      icon: ListOrderedIcon,
      isActive: () => editor?.isActive('orderedList'),
      onclick: () => editor?.chain().focus().toggleOrderedList().run(),
    },
  ]
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`flex h-7 min-w-7 shrink-0 flex-col items-center justify-center overflow-hidden rounded-sm px-1.5 text-sm hover:bg-neutral-200/80`}
        >
          <ListIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-y-1 p-1">
        {lists.map(({ label, icon: Icon, onclick, isActive }) => (
          <button
            className={cn(
              `flex items-center gap-x-2 rounded-sm px-2 py-1 hover:bg-neutral-200/80`,
              isActive() && 'bg-neutral-200/80',
            )}
            key={label}
            onClick={onclick}
          >
            <Icon />
            <span>{label}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ListButton

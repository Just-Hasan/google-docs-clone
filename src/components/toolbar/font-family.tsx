import { useEditorStore } from '@/store/use-editor-store'
import {
  DropdownMenu,
  DropdownMenuContent,
  //   DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { ChevronDownIcon } from 'lucide-react'

const FontFamilyButton = () => {
  const { editor } = useEditorStore()
  const fonts = [
    { label: 'Arial', value: 'Arial' },
    { label: 'Times New Roman', value: 'Times New Roman' },
    { label: 'Courier New', value: 'Courier New' },
    { label: 'Georgia', value: 'Georgia' },
    { label: 'Verdana', value: 'Verdana' },
  ]
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`flex h-7 w-[120px] shrink-0 items-center justify-between overflow-hidden rounded-sm px-1.5 text-sm hover:bg-neutral-200/80`}
        >
          <span className="truncate">
            {editor?.getAttributes('textStyle').fontFamily || 'Arial'}
          </span>
          <ChevronDownIcon className="size-4 shrink-0" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-y-1 p-1">
        {fonts.map(({ label, value }) => {
          return (
            <button
              onClick={() => editor?.chain().focus().setFontFamily(value).run()}
              className={cn(
                `flex items-center gap-x-2 rounded-sm px-2 py-1 hover:bg-neutral-200/80`,
                editor?.getAttributes('textStyle').fontFamily === value &&
                  'bg-neutral-200/80',
              )}
              style={{ fontFamily: value }}
              key={value}
            >
              <span className="text-xs">{label}</span>
            </button>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default FontFamilyButton

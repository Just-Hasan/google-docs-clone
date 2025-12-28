import { useEditorStore } from '@/store/use-editor-store'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { SketchPicker, type ColorResult } from 'react-color'
import { HighlighterIcon } from 'lucide-react'

const HighlightColorButton = () => {
  const { editor } = useEditorStore()
  const value = editor?.getAttributes('highlight').color || '#ffffff'
  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setHighlight({ color: color.hex }).run()
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`flex h-7 min-w-7 shrink-0 flex-col items-center justify-center overflow-hidden rounded-sm px-1.5 text-sm hover:bg-neutral-200/80`}
        >
          <HighlighterIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-0 p-0 shadow-md">
        <SketchPicker color={value} onChange={onChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default HighlightColorButton

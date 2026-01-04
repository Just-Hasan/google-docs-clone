'use client'

import { useEditorStore } from '@/store/use-editor-store'
import { type ColorResult, SketchPicker } from 'react-color'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

const TextColorButton = () => {
  const { editor } = useEditorStore()
  const value = editor?.getAttributes('textStyle').color || '#000000'

  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setColor(color.hex).run()
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`flex h-7 min-w-7 shrink-0 flex-col items-center justify-center overflow-hidden rounded-sm px-1.5 text-sm hover:bg-neutral-200/80`}
        >
          <span className="text-xs">A</span>
          <div
            className="h-0.5 w-full"
            style={{ backgroundColor: value }}
          ></div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-0 p-0 shadow-md">
        <SketchPicker color={value} onChange={onChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default TextColorButton

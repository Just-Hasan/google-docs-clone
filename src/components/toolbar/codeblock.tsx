'use client'

import { CodeIcon } from 'lucide-react'
import { useEditorStore } from '@/store/use-editor-store'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils' // Gunakan utility cn jika ada di proyekmu

const CodeblockButton = () => {
  const { editor } = useEditorStore()

  if (!editor) return null

  return (
    <Button
      variant="ghost" // Menggunakan ghost agar lebih bersih di toolbar
      size="icon"
      onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      className={cn(
        'transition-colors',
        editor.isActive('codeBlock')
          ? 'bg-sky-100 text-sky-700 hover:bg-sky-200'
          : '',
      )}
      title="Code Block (Ctrl+Alt+C)"
    >
      <CodeIcon className="size-4" />
    </Button>
  )
}

export default CodeblockButton

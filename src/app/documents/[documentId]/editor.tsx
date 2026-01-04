'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import { Table } from '@tiptap/extension-table'
import { TableRow } from '@tiptap/extension-table-row'
import { TableHeader } from '@tiptap/extension-table-header'
import { TableCell } from '@tiptap/extension-table-cell'
import { TextStyle } from '@tiptap/extension-text-style'
import FontFamily from '@tiptap/extension-font-family'
import { Heading } from '@tiptap/extension-heading'
import { Color } from '@tiptap/extension-color'
import ImageResize from 'tiptap-extension-resize-image'
import { TaskList } from '@tiptap/extension-task-list'
import { TaskItem } from '@tiptap/extension-task-item'
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import Link from '@tiptap/extension-link'
import StarterKit from '@tiptap/starter-kit'
import { useEditorStore } from '@/store/use-editor-store'
import Underline from '@tiptap/extension-underline'

import { FontSizeExtension } from '@/extensions/font-size'
import { useLiveblocksExtension } from '@liveblocks/react-tiptap'
import { LineHeightExtenstion } from '@/extensions/line-height'
import Ruler from './ruler'
import { Threads } from './threads'
import { useStorage } from '@liveblocks/react'

export const Editor = () => {
  const leftMargin = useStorage((root) => root.leftMargin)
  const rightMargin = useStorage((root) => root.rightMargin)
  const liveblocks = useLiveblocksExtension()
  const { setEditor } = useEditorStore()
  const editor = useEditor({
    // saat editor pertama kali dimuat / initialize
    onCreate: ({ editor }) => {
      setEditor(editor)
    },
    // saat navigate ke halaman yang berbeda dari editor
    onDestroy: () => {
      // console.log('destroyed')
      setEditor(null)
    },
    // saat mengupdate content editor
    onUpdate: ({ editor }) => {
      setEditor(editor)
    },
    // saat posisi kursor berubah, maju ketika kita mengetik, atau ketika kita mengarahkan kursor ke suatu text
    onSelectionUpdate: ({ editor }) => {
      // console.log('kursor changed')

      setEditor(editor)
    },
    // mendeteksi perubahan apapun
    onTransaction: ({ editor }) => {
      setEditor(editor)
    },
    // saat fokus dan siap mengetik di editor
    onFocus: ({ editor }) => {
      setEditor(editor)
    },
    // saat tidak fokus dan sedang tidak mengetik
    onBlur: ({ editor }) => {
      setEditor(editor)
    },
    // saat terjadi error
    onContentError: ({ editor }) => {
      setEditor(editor)
    },
    editorProps: {
      attributes: {
        style: `padding-left: ${leftMargin ?? 56}px; padding-right: ${rightMargin ?? 56}px;`,
        class:
          'focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text',
      },
    },
    extensions: [
      liveblocks,
      StarterKit.configure({
        history: false,
      }),
      FontSizeExtension,
      TaskList,
      TaskItem.configure({ nested: true }),
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      Image,
      ImageResize,
      Underline,
      TextStyle,
      FontFamily,
      Heading.configure({
        levels: [1, 2, 3, 4, 5],
      }),
      Color,
      Highlight.configure({ multicolor: true }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: 'https',
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      LineHeightExtenstion.configure({
        types: ['heading', 'paragraph'],
        defaultLineHeight: 'normal',
      }),
    ],

    immediatelyRender: false,
  })
  return (
    <div className="size-full overflow-x-auto bg-[#f9fbfd] px-4 print:overflow-visible print:bg-white print:p-0">
      <Ruler />
      <div className="mx-auto flex w-[816px] min-w-max justify-center py-4 print:w-full print:min-w-0 print:py-0">
        <EditorContent editor={editor} />
        <Threads editor={editor} />
      </div>
    </div>
  )
}

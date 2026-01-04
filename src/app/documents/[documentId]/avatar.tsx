'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ClientSideSuspense } from '@liveblocks/react'
import { useOthers, useSelf } from '@liveblocks/react/suspense'

export const Avatars = () => {
  return (
    <ClientSideSuspense fallback={null}>
      <AvatarStack />
    </ClientSideSuspense>
  )
}

const AvatarStack = () => {
  const users = useOthers()
  const currentUser = useSelf()

  return (
    <TooltipProvider>
      <div className="flex items-center -space-x-2">
        {currentUser && users.length >= 1 && (
          <AvatarItem src={currentUser.info.avatar} name="You" />
        )}

        {users.map(({ connectionId, info }) => {
          return (
            <AvatarItem key={connectionId} src={info.avatar} name={info.name} />
          )
        })}
      </div>
    </TooltipProvider>
  )
}

interface AvatarItemProps {
  src?: string
  name?: string
}

const AvatarItem = ({ src, name }: AvatarItemProps) => {
  const initials =
    name
      ?.split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() || '??'

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Avatar className="border-2 border-background ring-2 ring-background transition-transform hover:z-10 hover:scale-110">
          <AvatarImage src={src} alt={name} />
          <AvatarFallback className="bg-gray-200 text-xs font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        className="border-none bg-black px-2 py-1 text-xs text-white"
      >
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  )
}

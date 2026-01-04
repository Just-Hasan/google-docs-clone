import { Liveblocks } from '@liveblocks/node'
import { ConvexHttpClient } from 'convex/browser'
import { auth, currentUser } from '@clerk/nextjs/server'
// import { api } from '../../../../convex/_generated/api'

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!)
const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY!,
})
convex.setAuth(process.env.CONVEX_AUTH_TOKEN || '')
export async function POST(req: Request) {
  const { sessionClaims } = await auth()
  if (!sessionClaims) {
    return new Response('Unauthorized', { status: 401 })
  }
  console.log('CONVEX_URL in route:', process.env.NEXT_PUBLIC_CONVEX_URL)

  const user = await currentUser()
  if (!user) {
    return new Response('Unauthorized', { status: 401 })
  }
  const { room } = await req.json()

  const session = liveblocks.prepareSession(user.id, {
    userInfo: {
      name:
        user.fullName ?? user.primaryEmailAddress?.emailAddress ?? 'Anonymous',
      avatar: user.imageUrl,
    },
  })
  session.allow(room, session.FULL_ACCESS)
  const { body, status } = await session.authorize()
  return new Response(body, { status })
}

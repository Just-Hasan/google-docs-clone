'use client'

import { ClerkProvider, SignIn, useAuth } from '@clerk/clerk-react'

import {
  Authenticated,
  AuthLoading,
  ConvexReactClient,
  Unauthenticated,
} from 'convex/react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { ReactNode } from 'react'
import FullScreenLoader from './fullscreen-loader'

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error('Missing NEXT_PUBLIC_CONVEX_URL in your .env file')
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL)

export default function ConvexClientProvider({
  children,
}: {
  children: ReactNode
}) {
  return (
    <ClerkProvider
      publishableKey={`${process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}`}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <Authenticated>{children}</Authenticated>
        <Unauthenticated>
          <div className="flex min-h-screen flex-col items-center justify-center">
            <SignIn routing="hash" />
          </div>
        </Unauthenticated>
        <AuthLoading>
          <FullScreenLoader label="Auth Loading" />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}

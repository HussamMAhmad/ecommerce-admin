import { SignIn } from '@clerk/nextjs'
import { Suspense } from 'react'

export default function SingInPage() {
  return (
    <Suspense>
      <SignIn/>
    </Suspense>
  )
}
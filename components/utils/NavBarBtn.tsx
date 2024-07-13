import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types'
import React from 'react'
import { Button } from '../ui/button'
import {   RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components'
import Link from 'next/link'

function NavBarBtn({user}:{user: KindeUser | null}) {
  return (
    <div>
        {!user ? (
        <Button >
          <RegisterLink>Register</RegisterLink>
        </Button>
      ) : (
        <Button>
          <Link href={'/dashboard'}>Dashboard</Link>
          {/* <LogoutLink>Logout</LogoutLink> */}
        </Button>
      )}
    </div>
  )
}

export default NavBarBtn
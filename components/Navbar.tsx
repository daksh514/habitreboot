import { LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types'
import React from 'react'
import { Button } from './ui/button'

function Navbar({user}:{user:KindeUser | null}) {

  return (
    <div>
        <div>
            {
                !user ?
                <Button variant={"outline"}>
                  <RegisterLink>Register</RegisterLink>
                </Button>
                :
                <Button variant={'secondary'}>
                  <LogoutLink>LogOut</LogoutLink>
                </Button>
            }
        </div>
    </div>
  )
}

export default Navbar
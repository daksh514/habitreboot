import HabitActionForm from '@/components/HabitActionForm'
import PastGenerations from '@/components/sections/PastGenerations'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'


async function page() {
  const {getUser} = getKindeServerSession()
  const user = await getUser()
  if (!user || user === null ||!user.id) redirect('/')

  return (
    <div className='widthContainer py-4'>
        <HabitActionForm/>
        <PastGenerations userId={user.id}/>
    </div>
  )
}

export default page
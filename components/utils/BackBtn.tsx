"use client"
import React from 'react'
import { Button } from '../ui/button'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

function BackBtn() {
    const router = useRouter()
  return (
    <Button size={'icon'} variant={'outline'} onClick={()=>router.back()}><ArrowLeft/></Button>
  )
}

export default BackBtn
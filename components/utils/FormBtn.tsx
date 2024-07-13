"use client"
import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { useFormStatus } from 'react-dom'
import { Loader2 } from 'lucide-react'

function FormBtn({label, className}:{label:string, className?:string}) {
    const {pending} = useFormStatus()
  return (
    <>
    
    <Button className={cn('', className)} disabled={pending}>{!pending ? label : <Loader2 className='animate-spin'/>}</Button>
    <p className={`text-xs mt-1 ${!pending ? 'hidden' : ''}`}><span className="font-bold text-destructive">Note: </span>This may take some time!</p>
    </>

  )
}

export default FormBtn
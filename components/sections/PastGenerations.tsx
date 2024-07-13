import prisma from '@/utils/db'
import React from 'react'
import GenerationCard from '../GenerationCard'

async function PastGenerations({userId}:{userId:string}) {
    const generations = await prisma.habitPage.findMany({
        where: {
            userId: userId
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
  return (
    <div className='mt-5 '>
        <h1 className='font-mukta text-lg font-medium'>
            Past Generations
        </h1>
        <div className='mt-4 grid grid-cols-3 gap-2'>
            {
                generations.map((generation, index) => (
                    <GenerationCard id={generation.id} title={generation.habitTitle} createdAt={generation.createdAt} key={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default PastGenerations
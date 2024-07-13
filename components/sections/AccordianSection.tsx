import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

function AccordianSection({thingsToMap, isHabit}:{thingsToMap:any, isHabit: boolean}) {
  return (
    <Accordion type="single" collapsible>
            {thingsToMap.map((sideEffect: any, index: number) => (
              <div key={index}>
                <AccordionItem value={"item-" + index + 1}>
                  <AccordionTrigger>{ sideEffect.heading}</AccordionTrigger>
                  <AccordionContent>{sideEffect.description}</AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
  )
}

export default AccordianSection
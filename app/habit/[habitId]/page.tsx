import prisma from "@/utils/db";
import React from "react";
import AccordianSection from "@/components/sections/AccordianSection";
import BackBtn from "@/components/utils/BackBtn";
import { unstable_noStore } from "next/cache";
async function page({ params }: { params: { habitId: string } }) {
unstable_noStore()

 
  const habitInfo = await prisma.habitPage.findUnique({
    where: { id: params.habitId },
  });
  const habitData = JSON.parse(JSON.stringify(habitInfo?.habitData));
  return (
    <div className="widthContainer pt-4 pb-20">
      <div className="pb-2 flex gap-5 items-center">
        <BackBtn/>
        <h1 className="text-2xl  font-semibold">{habitInfo?.habitTitle}</h1>
      </div>
      <div className=" shadow bg-secondary p-4 rounded-md">
        <p>{habitData.additional_knowledge}</p>
      </div>
      <div className="mt-5">
        <h2 className="text-lg font-semibold">
          Benifits of quitting {habitInfo?.habitTitle}
        </h2>
        <div>
          <AccordianSection
            thingsToMap={habitData.side_effects}
            isHabit={false}
          />
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold">
            Habits to leave {habitInfo?.habitTitle}
          </h2>
          <div className="grid mt-3 gap-2">
            {habitData.habits_to_adopt.map((habitInfo: any, index: number) => (
              <div
                className=" px-3 py-2 rounded-md shadow-sm"
                key={index}
              >
                <p>
                  <span className="font-semibold">{`${habitInfo.heading}: `}</span>
                  {habitInfo.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-lg font-semibold">
          Useful tips to leave {habitInfo?.habitTitle}
        </h2>
        <div className="grid mt-3 gap-2">
          {habitData.useful_tips.map((tip: any, index: number) => (
            <div
              className=" px-3 py-2 rounded-md shadow-sm"
              key={index}
            >
              <p>{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;

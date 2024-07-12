import React from "react";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { LandingPageHabits } from "@/lib/constants";
import { Separator } from "../ui/separator";
import Divider from "../utils/Divider";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function HeroSec() {
  return (
    <div className="mt-16 flex flex-col items-center w-3/4 mx-auto">
      <h1 className="text-5xl  font-mukta font-bold  text-center">
        <span className="underline">Completely Remove</span> Bad Habits From
        Your Schedule!
      </h1>
      <p className="mt-6 font-normal text-secondary-foreground text-center">
        Habit Reboot helps you to choose one perticular bad habit at a time and
        remove it{" "}
        <span className="font-medium">completely form your life!</span>
      </p>
      <div className="mt-6 w-full">
        <div className="flex justify-between gap-3">
          {LandingPageHabits.map((habit) => (
            <div
              key={habit.title}
              className="w-full bg-secondary aspect-video rounded-md shadow-md flex flex-col justify-center items-center gap-2"
            >
              <h1 className="text-2xl">{habit.icon}</h1>
              <h2 className=" font-semibold">{habit.title}</h2>
            </div>
          ))}
        </div>
        <Divider label="OR" />
        <div>
          <Label>Enter Your Bad Habit</Label>
          <Input placeholder="Phone Addiction" className="shadow-sm" />
        </div>
        <div className="w-full  mt-3 flex justify-center">
        <Button className=" mx-auto w-full">Get Started</Button>

        </div>
      </div>
    </div>
  );
}

export default HeroSec;

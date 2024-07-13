"use client"
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { makeNewPlan } from "@/actions/habitActions";
import FormBtn from "./utils/FormBtn";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

function HabitActionForm() {
  const router = useRouter()
  async function habitRemoveAction(formadata: FormData){
    const response = await makeNewPlan(formadata.get("habitName") as string)
    router.push(`/habit/${response.id}`)
  }
  return (
    <div>
      <form action={habitRemoveAction}>
        <Label>Enter the habit you want to remove.</Label>
        <Input placeholder="Phone Addiction" required name="habitName"/>
        <FormBtn className="mt-3" label="Remove Habit"/>
      </form>
    </div>
  );
}

export default HabitActionForm;

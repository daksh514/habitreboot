"use server"
import prisma from "@/utils/db";
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { revalidatePath } from "next/cache";




async function generateResponse(habitName: string) {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey as string);
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-pro",
    });

    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "application/json",
    };


    try {


        const chatSession = model.startChat({
            generationConfig,
            // safetySettings: Adjust safety settings
            // See https://ai.google.dev/gemini-api/docs/safety-settings
            history: [
                {
                    role: "user",
                    parts: [
                        { text: "I am building a web app where I will show people how to leave a perticular bad habit, now, from now on, I will provide you only the name of the habits, I want you to provide me 5-15 habits to leave that habit, the name of the object shoud be 'habits_to_adopt', 5-10 side effects, the name of the object should be 'side_effects',(each side effect should have  one heading element named 'heading' and a very short description named 'description' for it, and same for the habits you are providing), any additional knowledge of 2-3 paragraphs, and also a array some useful tips that would help in leaving the habit!, the name of the array should be 'useful tips'\n" },
                    ],
                },
            ],
        });

        const result = await chatSession.sendMessage("Provide me the same for " + habitName);
        return result.response.text()
    } catch (error) {
        console.log(error);

    }


}

export async function makeNewPlan(habitName: string) {
    const jsonData = await generateResponse(habitName);

    const { getUser } = getKindeServerSession()
    const user = await getUser() as KindeUser
    const data = await prisma.habitPage.create({
        data: {
            habitTitle: habitName,
            habitData: JSON.parse(jsonData as string),
            userId: user.id as string
        }
    })

    revalidatePath('/dashboard')



    return data
}
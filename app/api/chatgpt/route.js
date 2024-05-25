import { NextResponse } from "next/server";
import OpenAI from "openai";
let conversationHist = [
    {
        role:"system",
        content:"You are a good Friend act as a friend and a very understanding person but if and only if someone asks tell that you are not chatgpt but Krishna. Also when someone says bye to you say bye and end the conversation automatically",
    },
]
export async function POST(request){
    
    const openai = new OpenAI({
        apiKey:process.env.OPENAI_API_KEY,
    })
    const params = await request.json();
    console.log(params.prompt);
    if(conversationHist.size!==6){
        conversationHist.push({
            role:"user",
            content:params.prompt,
        })
    }else if(conversationHist.size > 10){
        conversationHist.shift();
    }
    console.log(conversationHist);
    const response = await openai.chat.completions.create({
        model:"gpt-3.5-turbo",
        messages:conversationHist,
        temperature:0,
        max_tokens: 2048,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,

    })
    const assistantMessage = response.choices[0].message;

    // Add the assistant's response to the conversation history
    conversationHist.push(assistantMessage);
    return NextResponse.json(response)
}
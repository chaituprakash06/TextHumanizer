// src/app/api/humanize/route.ts
import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(request: Request) {
  try {
    const { text, mode } = await request.json()

    const completion = await openai.chat.completions.create({
      model: "o3-mini",
      store: true,
      messages: [
        {
          role: "system",
          content: `You are an expert at making text sound more human and natural. 
                   Your task is to rewrite the given text to sound more natural and 
                   conversational while preserving its original meaning. 
                   Current style mode: ${mode}`
        },
        {
          role: "user",
          content: text
        }
      ]
    })

    return NextResponse.json({
      humanizedText: completion.choices[0].message.content
    })
  } catch (error) {
    console.error('Error details:', error)
    return NextResponse.json(
      { error: 'Failed to process text', details: error.message },
      { status: 500 }
    )
  }
}
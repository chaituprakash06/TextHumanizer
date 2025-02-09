import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(request: Request) {
  try {
    const { text, mode } = await request.json()

    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: `You are an expert at making text sound more human and natural. 
                   Maintain the original meaning but make it sound more conversational 
                   and natural based on the selected style: ${mode}.`
        },
        {
          role: "user",
          content: `Transform this text to sound more human while maintaining its meaning: ${text}`
        }
      ]
    })

    return NextResponse.json({
      humanizedText: response.choices[0].message.content
    })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Failed to process text' },
      { status: 500 }
    )
  }
}
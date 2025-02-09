'use client'

import { useState } from 'react'
import { TextArea } from '@/components/text-area'
import { Button } from '@/components/button'
import { ModeSelector } from '@/components/mode-selector'
import { Container } from '@/components/container'
import type { HumanizerMode } from '@/lib/types'

export default function Home() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [mode, setMode] = useState<HumanizerMode>('standard')
  const [isProcessing, setIsProcessing] = useState(false)

  const handleHumanize = async () => {
    if (!inputText.trim()) return
    
    try {
      setIsProcessing(true)
      const response = await fetch('/api/humanize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: inputText, mode })
      })
      
      const data = await response.json()
      setOutputText(data.humanizedText)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-900">
      <Container>
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Transform AI Text to Human Writing
            </h1>
            <p className="text-xl text-gray-400">
              Convert AI-generated content into natural, human-like text
            </p>
          </div>

          <ModeSelector mode={mode} onModeChange={setMode} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextArea
              value={inputText}
              onChange={setInputText}
              placeholder="Enter your AI-generated text here..."
              disabled={isProcessing}
            />
            <TextArea
              value={outputText}
              onChange={setOutputText}
              placeholder="Humanized text will appear here..."
              disabled={true}
            />
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleHumanize}
              disabled={isProcessing || !inputText.trim()}
            >
              {isProcessing ? 'Processing...' : 'Humanize Text'}
            </Button>
          </div>
        </div>
      </Container>
    </main>
  )
}
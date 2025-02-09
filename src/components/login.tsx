'use client'

import { useState } from 'react'
import { Button } from './button'
import { Container } from './container'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add login logic here
  }

  return (
    <Container>
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-white text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
          />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </Container>
  )
}
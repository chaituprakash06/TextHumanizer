import { HumanizerMode } from '@/lib/types'

export function ModeSelector({
  mode,
  onModeChange
}: {
  mode: HumanizerMode
  onModeChange: (mode: HumanizerMode) => void
}) {
  return (
    <div className="flex justify-center space-x-2 p-4 bg-gray-800 rounded-lg">
      {['standard', 'academic', 'casual', 'formal', 'creative'].map((m) => (
        <button
          key={m}
          onClick={() => onModeChange(m as HumanizerMode)}
          className={`px-4 py-2 rounded-lg transition ${
            mode === m ? 'bg-cyan-500 text-white' : 'hover:bg-gray-700 text-white'
          }`}
        >
          {m.charAt(0).toUpperCase() + m.slice(1)}
        </button>
      ))}
    </div>
  )
}
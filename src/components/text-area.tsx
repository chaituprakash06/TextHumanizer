export function TextArea({
    value,
    onChange,
    placeholder,
    disabled
  }: {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    disabled?: boolean
  }) {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full h-64 p-4 rounded-lg bg-gray-800 border border-gray-700 
                   focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none text-white"
      />
    )
  }
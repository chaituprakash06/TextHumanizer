export function Button({
    children,
    onClick,
    disabled,
    variant = 'primary'
  }: {
    children: React.ReactNode
    onClick?: () => void
    disabled?: boolean
    variant?: 'primary' | 'secondary'
  }) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`px-4 py-2 rounded-lg transition ${
          variant === 'primary'
            ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
            : 'bg-gray-800 hover:bg-gray-700 text-white'
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {children}
      </button>
    )
  }
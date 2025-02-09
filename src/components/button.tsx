interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary'
    children: React.ReactNode
  }
  
  export function Button({ 
    children, 
    variant = 'primary', 
    ...props 
  }: ButtonProps) {
    return (
      <button
        {...props}
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
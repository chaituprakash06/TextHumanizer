export function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  
  export function truncateText(text: string, maxLength: number = 100) {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + '...'
  }
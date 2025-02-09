export type HumanizerMode = 'standard' | 'academic' | 'casual' | 'formal' | 'creative'

export interface HumanizeRequest {
  text: string
  mode: HumanizerMode
}

export interface HumanizeResponse {
  humanizedText: string
}
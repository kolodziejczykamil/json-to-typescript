export type JsonValidationResult =
  | { valid: true; error: undefined; line: undefined; column: undefined }
  | { valid: false; error: string; line: number; column: number }

export function validateJson(input: string): JsonValidationResult {
  if (!input.trim()) {
    return { valid: true, error: undefined, line: undefined, column: undefined }
  }

  try {
    JSON.parse(input)
    return { valid: true, error: undefined, line: undefined, column: undefined }
  } catch (error) {
    if (error instanceof SyntaxError) {
      const message = error.message
      const match = message.match(/position (\d+)/)
      const position = match ? Number.parseInt(match[1]!, 10) : 0

      const lines = input.substring(0, position).split('\n')
      const line = lines.length
      const column = lines[lines.length - 1]?.length ?? 0

      return {
        valid: false,
        error: message,
        line,
        column,
      }
    }

    const message = error instanceof Error ? error.message : 'Invalid JSON format'
    return {
      valid: false,
      error: message,
      line: 1,
      column: 0,
    }
  }
}

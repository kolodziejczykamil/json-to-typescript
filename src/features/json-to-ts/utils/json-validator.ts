export type JsonValidationResult =
  | { valid: true; error: undefined }
  | { valid: false; error: string }

export function validateJson(input: string): JsonValidationResult {
  if (!input.trim()) {
    return { valid: true, error: undefined }
  }

  try {
    JSON.parse(input)
    return { valid: true, error: undefined }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Invalid JSON format'
    return { valid: false, error: message }
  }
}

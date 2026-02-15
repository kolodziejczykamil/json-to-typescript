import type { ConversionOptions } from '../types'

import { formatInterfaces } from './formatter'
import { analyzeRootType } from './type-analyzer'

export function convertJsonToTypescript(
  jsonInput: string | unknown,
  rootName: string,
  options: ConversionOptions,
): string {
  let parsed: unknown

  if (typeof jsonInput === 'string') {
    try {
      parsed = JSON.parse(jsonInput)
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      throw new Error(`Invalid JSON: ${message}`)
    }
  } else {
    parsed = jsonInput
  }

  const { interfaces } = analyzeRootType(parsed, rootName, options)

  if (interfaces.size === 0) {
    const typeStr = typeof parsed
    if (options.outputFormat === 'type') {
      return `export type ${rootName} = ${typeStr}`
    }
    return `export interface ${rootName} {\n  value: ${typeStr}\n}`
  }

  return formatInterfaces(interfaces, options)
}

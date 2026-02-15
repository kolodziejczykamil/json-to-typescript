import type { ConversionOptions } from '../types'
import { isArray, isPrimitive, isRecord } from '../utils/type-guards'

import { formatInterfaces, formatPrimitiveType } from './formatter'
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

  const { interfaces, rootType } = analyzeRootType(parsed, rootName, options)

  if (interfaces.size === 0) {
    return formatPrimitiveType(rootType, rootName, options)
  }

  if (isArray(parsed) || isPrimitive(parsed) || !isRecord(parsed)) {
    const formatted = formatInterfaces(interfaces, rootType, options)
    return `${formatted}\n\nexport type ${rootName} = ${rootType}`
  }

  return formatInterfaces(interfaces, rootType, options)
}

import type { ConversionOptions, InterfaceDefinition, InterfaceField } from '../types'
import { generateInterfaceName } from '../utils/naming'
import { isArray, isPrimitive, isRecord } from '../utils/type-guards'

type InterfaceMap = Map<string, InterfaceDefinition>

function analyzePrimitiveType(value: unknown): string {
  if (value === null) {
    return 'null'
  }
  return typeof value
}

function analyzeArrayType(
  array: unknown[],
  interfaces: InterfaceMap,
  parentName: string | undefined,
  key: string | undefined,
  options: ConversionOptions,
): string {
  if (array.length === 0) {
    return 'any[]'
  }

  const types = new Set<string>()
  for (const item of array) {
    const itemType = analyzeType(item, interfaces, parentName, key, options)
    types.add(itemType)
  }

  if (types.size === 1) {
    const singleType = Array.from(types)[0]
    return `${singleType}[]`
  }

  const unionType = Array.from(types).sort().join(' | ')
  return `(${unionType})[]`
}

function analyzeObjectType(
  obj: Record<string, unknown>,
  interfaces: InterfaceMap,
  parentName: string | undefined,
  key: string | undefined,
  options: ConversionOptions,
): string {
  const interfaceName = key
    ? generateInterfaceName(key, parentName)
    : generateInterfaceName('Item', parentName)

  const existingInterface = interfaces.get(interfaceName)
  if (existingInterface) {
    return existingInterface.name
  }

  const fields: InterfaceField[] = []
  const sortedKeys = Object.keys(obj).sort()

  for (const fieldKey of sortedKeys) {
    const fieldValue = obj[fieldKey]
    let fieldType = analyzeType(fieldValue, interfaces, interfaceName, fieldKey, options)

    if (fieldValue === null) {
      const nonNullValues = Object.values(obj).filter(v => v !== null)
      if (nonNullValues.length > 0) {
        const sampleValue = nonNullValues[0]
        const sampleType = analyzeType(sampleValue, interfaces, interfaceName, fieldKey, options)
        if (sampleType !== 'null') {
          fieldType = `${sampleType} | null`
        }
      }
    }

    fields.push({ key: fieldKey, type: fieldType })
  }

  interfaces.set(interfaceName, { name: interfaceName, fields })
  return interfaceName
}

function analyzeType(
  value: unknown,
  interfaces: InterfaceMap,
  parentName: string | undefined,
  key: string | undefined,
  options: ConversionOptions,
): string {
  if (value === null) {
    return 'null'
  }

  if (isArray(value)) {
    return analyzeArrayType(value, interfaces, parentName, key, options)
  }

  if (isRecord(value)) {
    return analyzeObjectType(value, interfaces, parentName, key, options)
  }

  if (isPrimitive(value)) {
    return analyzePrimitiveType(value)
  }

  return 'unknown'
}

export function analyzeRootType(
  value: unknown,
  rootName: string,
  options: ConversionOptions,
): { interfaces: InterfaceMap; rootType: string } {
  const interfaces: InterfaceMap = new Map()

  if (isRecord(value)) {
    const fields: InterfaceField[] = []
    const sortedKeys = Object.keys(value).sort()

    for (const key of sortedKeys) {
      const fieldValue = value[key]
      let fieldType = analyzeType(fieldValue, interfaces, rootName, key, options)

      if (fieldValue === null) {
        const nonNullValues = Object.values(value).filter(v => v !== null)
        if (nonNullValues.length > 0) {
          const sampleValue = nonNullValues[0]
          const sampleType = analyzeType(sampleValue, interfaces, rootName, key, options)
          if (sampleType !== 'null') {
            fieldType = `${sampleType} | null`
          }
        }
      }

      fields.push({ key, type: fieldType })
    }

    interfaces.set(rootName, { name: rootName, fields })
    return { interfaces, rootType: rootName }
  }

  const rootType = analyzeType(value, interfaces, rootName, undefined, options)
  return { interfaces, rootType }
}

import type { ConversionOptions, InterfaceDefinition } from '../types'

export function formatInterfaces(
  interfaces: Map<string, InterfaceDefinition>,
  rootType: string,
  options: ConversionOptions,
): string {
  const sortedInterfaces = Array.from(interfaces.values()).sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  })

  const formatted = sortedInterfaces
    .map(iface => {
      const fields = iface.fields
        .map(field => {
          let fieldKey = field.key
          if (options.optionalFields) {
            fieldKey = `${fieldKey}?`
          }
          const readonlyPrefix = options.readonlyFields ? 'readonly ' : ''
          return `  ${readonlyPrefix}${fieldKey}: ${field.type}`
        })
        .join('\n')

      if (options.outputFormat === 'type') {
        return `export type ${iface.name} = {\n${fields}\n}`
      }

      return `export interface ${iface.name} {\n${fields}\n}`
    })
    .join('\n\n')

  return formatted.trim()
}

export function formatPrimitiveType(
  rootType: string,
  rootName: string,
  options: ConversionOptions,
): string {
  if (options.outputFormat === 'type') {
    return `export type ${rootName} = ${rootType}`
  }
  return `export interface ${rootName} {\n  value: ${rootType}\n}`
}

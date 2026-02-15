export type ConversionOptions = {
  readonly readonlyFields: boolean
  readonly optionalFields: boolean
  readonly outputFormat: 'interface' | 'type'
}

export type ConversionError = {
  readonly type: 'invalid-json' | 'clipboard-read' | 'clipboard-write' | 'unknown'
  readonly message: string
}

export interface InterfaceField {
  readonly key: string
  readonly type: string
}

export interface InterfaceDefinition {
  readonly name: string
  readonly fields: readonly InterfaceField[]
}

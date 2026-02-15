import { convertJsonToTypescript } from '../jsonToTs'

describe('convertJsonToTypescript', () => {
  it('should convert simple JSON object to TypeScript interface', () => {
    const json = { name: 'John', age: 30 }
    const result = convertJsonToTypescript(json, 'User', {
      readonlyFields: false,
      optionalFields: false,
      outputFormat: 'interface',
    })
    expect(result).toContain('export interface User')
    expect(result).toContain('name: string')
    expect(result).toContain('age: number')
  })

  it('should handle nested objects', () => {
    const json = {
      user: {
        name: 'John',
        profile: {
          email: 'john@example.com',
        },
      },
    }
    const result = convertJsonToTypescript(json, 'Root', {
      readonlyFields: false,
      optionalFields: false,
      outputFormat: 'interface',
    })
    expect(result).toContain('export interface Root')
    expect(result).toContain('export interface RootUser')
    expect(result).toContain('export interface RootUserProfile')
  })

  it('should handle arrays', () => {
    const json = { tags: ['a', 'b', 'c'] }
    const result = convertJsonToTypescript(json, 'Item', {
      readonlyFields: false,
      optionalFields: false,
      outputFormat: 'interface',
    })
    expect(result).toContain('tags: string[]')
  })

  it('should handle empty arrays', () => {
    const json = { items: [] }
    const result = convertJsonToTypescript(json, 'Item', {
      readonlyFields: false,
      optionalFields: false,
      outputFormat: 'interface',
    })
    expect(result).toContain('items: any[]')
  })

  it('should handle mixed type arrays', () => {
    const json = { values: [1, 'text', true] }
    const result = convertJsonToTypescript(json, 'Item', {
      readonlyFields: false,
      optionalFields: false,
      outputFormat: 'interface',
    })
    expect(result).toContain('values: (boolean | number | string)[]')
  })

  it('should handle null values', () => {
    const json = { value: null }
    const result = convertJsonToTypescript(json, 'Item', {
      readonlyFields: false,
      optionalFields: false,
      outputFormat: 'interface',
    })
    expect(result).toContain('value: null')
  })

  it('should handle optional fields option', () => {
    const json = { name: 'John', age: 30 }
    const result = convertJsonToTypescript(json, 'User', {
      readonlyFields: false,
      optionalFields: true,
      outputFormat: 'interface',
    })
    expect(result).toContain('name?: string')
    expect(result).toContain('age?: number')
  })

  it('should handle readonly fields option', () => {
    const json = { name: 'John' }
    const result = convertJsonToTypescript(json, 'User', {
      readonlyFields: true,
      optionalFields: false,
      outputFormat: 'interface',
    })
    expect(result).toContain('readonly name: string')
  })

  it('should handle both optional and readonly fields', () => {
    const json = { name: 'John' }
    const result = convertJsonToTypescript(json, 'User', {
      readonlyFields: true,
      optionalFields: true,
      outputFormat: 'interface',
    })
    expect(result).toContain('readonly name?: string')
  })

  it('should throw error for invalid JSON string', () => {
    expect(() => {
      convertJsonToTypescript('{ invalid json }', 'User', {
        readonlyFields: false,
        optionalFields: false,
        outputFormat: 'interface',
      })
    }).toThrow('Invalid JSON')
  })

  it('should handle complex nested structure', () => {
    const json = {
      id: 1,
      user: {
        name: 'John',
        skills: ['TypeScript', 'React'],
        active: true,
      },
      items: [
        {
          id: 1,
          name: 'Item 1',
        },
      ],
    }
    const result = convertJsonToTypescript(json, 'Root', {
      readonlyFields: false,
      optionalFields: false,
      outputFormat: 'interface',
    })
    expect(result).toContain('export interface Root')
    expect(result).toContain('export interface RootUser')
    expect(result).toContain('export interface RootItemsItem')
  })
})

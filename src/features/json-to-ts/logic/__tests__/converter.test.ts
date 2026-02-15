import { describe, expect, it } from 'vitest'

import { convertJsonToTypescript } from '../converter'
import type { ConversionOptions } from '../../types'

const defaultOptions: ConversionOptions = {
  readonlyFields: false,
  optionalFields: false,
  outputFormat: 'interface',
}

describe('convertJsonToTypescript', () => {
  it('should convert simple JSON object to TypeScript interface', () => {
    const json = { name: 'John', age: 30 }
    const result = convertJsonToTypescript(json, 'User', defaultOptions)
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
    const result = convertJsonToTypescript(json, 'Root', defaultOptions)
    expect(result).toContain('export interface Root')
    expect(result).toContain('export interface RootUser')
    expect(result).toContain('export interface RootUserProfile')
  })

  it('should handle arrays', () => {
    const json = { tags: ['a', 'b', 'c'] }
    const result = convertJsonToTypescript(json, 'Item', defaultOptions)
    expect(result).toContain('tags: string[]')
  })

  it('should handle empty arrays', () => {
    const json = { items: [] }
    const result = convertJsonToTypescript(json, 'Item', defaultOptions)
    expect(result).toContain('items: any[]')
  })

  it('should handle mixed type arrays', () => {
    const json = { values: [1, 'text', true] }
    const result = convertJsonToTypescript(json, 'Item', defaultOptions)
    expect(result).toContain('values: (boolean | number | string)[]')
  })

  it('should handle null values', () => {
    const json = { value: null }
    const result = convertJsonToTypescript(json, 'Item', defaultOptions)
    expect(result).toContain('value: null')
  })

  it('should handle null union with non-null values', () => {
    const json = { value: null, other: 'test' }
    const result = convertJsonToTypescript(json, 'Item', defaultOptions)
    expect(result).toContain('value: string | null')
  })

  it('should handle root array', () => {
    const json = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
    ]
    const result = convertJsonToTypescript(json, 'Items', defaultOptions)
    expect(result).toContain('export interface ItemsItem')
    expect(result).toContain('export type Items = (ItemsItem)[]')
  })

  it('should handle primitive root type', () => {
    const json = 123
    const result = convertJsonToTypescript(json, 'MyNumber', defaultOptions)
    expect(result).toContain('export interface MyNumber')
    expect(result).toContain('value: number')
  })

  it('should handle optional fields option', () => {
    const json = { name: 'John', age: 30 }
    const result = convertJsonToTypescript(json, 'User', {
      ...defaultOptions,
      optionalFields: true,
    })
    expect(result).toContain('name?: string')
    expect(result).toContain('age?: number')
  })

  it('should handle readonly fields option', () => {
    const json = { name: 'John' }
    const result = convertJsonToTypescript(json, 'User', {
      ...defaultOptions,
      readonlyFields: true,
    })
    expect(result).toContain('readonly name: string')
  })

  it('should handle both optional and readonly fields', () => {
    const json = { name: 'John' }
    const result = convertJsonToTypescript(json, 'User', {
      ...defaultOptions,
      optionalFields: true,
      readonlyFields: true,
    })
    expect(result).toContain('readonly name?: string')
  })

  it('should output as type when outputFormat is "type"', () => {
    const json = { name: 'John', age: 30 }
    const result = convertJsonToTypescript(json, 'User', {
      ...defaultOptions,
      outputFormat: 'type',
    })
    expect(result).toContain('export type User = {')
    expect(result).toContain('name: string')
    expect(result).toContain('age: number')
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
    const result = convertJsonToTypescript(json, 'Root', defaultOptions)
    expect(result).toContain('export interface Root')
    expect(result).toContain('export interface RootUser')
    expect(result).toContain('export interface RootItemsItem')
  })

  it('should prevent duplicate interface generation', () => {
    const json = {
      user1: { name: 'John', age: 30 },
      user2: { name: 'Jane', age: 25 },
    }
    const result = convertJsonToTypescript(json, 'Root', defaultOptions)
    const interfaceCount = (result.match(/export interface RootUser/g) || []).length
    expect(interfaceCount).toBe(1)
  })

  it('should throw error for invalid JSON string', () => {
    expect(() => {
      convertJsonToTypescript('{ invalid json }', 'User', defaultOptions)
    }).toThrow('Invalid JSON')
  })

  it('should handle deep nesting', () => {
    const json = {
      level1: {
        level2: {
          level3: {
            level4: {
              value: 'deep',
            },
          },
        },
      },
    }
    const result = convertJsonToTypescript(json, 'Root', defaultOptions)
    expect(result).toContain('export interface Root')
    expect(result).toContain('export interface RootLevel1')
    expect(result).toContain('export interface RootLevel1Level2')
    expect(result).toContain('export interface RootLevel1Level2Level3')
    expect(result).toContain('export interface RootLevel1Level2Level3Level4')
  })
})

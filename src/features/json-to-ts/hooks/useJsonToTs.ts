'use client'

import { useCallback, useState } from 'react'

import { convertJsonToTypescript } from '../logic/converter'
import type { ConversionError, ConversionOptions } from '../types'

const DEFAULT_ROOT_NAME = 'RootObject'
const DEFAULT_OPTIONS: ConversionOptions = {
  readonlyFields: false,
  optionalFields: true,
  outputFormat: 'interface',
}

const DEFAULT_EXAMPLE_JSON = `{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "isActive": true,
  "age": 30,
  "profile": {
    "avatar": "https://example.com/avatar.jpg",
    "bio": "Software developer",
    "location": {
      "city": "New York",
      "country": "USA"
    }
  },
  "skills": ["TypeScript", "React", "Node.js"],
  "projects": 5
}`

export function useJsonToTs(initialJson?: string) {
  const [jsonInput, setJsonInput] = useState<string>(initialJson ?? DEFAULT_EXAMPLE_JSON)
  const [tsOutput, setTsOutput] = useState<string>('')
  const [error, setError] = useState<ConversionError | undefined>()
  const [rootTypeName, setRootTypeName] = useState<string>(DEFAULT_ROOT_NAME)
  const [conversionOptions, setConversionOptions] = useState<ConversionOptions>(DEFAULT_OPTIONS)

  const generateTypes = useCallback(() => {
    if (!jsonInput.trim()) {
      setError({
        type: 'invalid-json',
        message: 'JSON input is empty',
      })
      setTsOutput('')
      return
    }

    try {
      setError(undefined)
      const result = convertJsonToTypescript(jsonInput, rootTypeName, conversionOptions)
      setTsOutput(result)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error occurred'
      setError({
        type: 'invalid-json',
        message,
      })
      setTsOutput('')
    }
  }, [jsonInput, rootTypeName, conversionOptions])

  const formatJson = useCallback(() => {
    try {
      const parsed = JSON.parse(jsonInput)
      const formatted = JSON.stringify(parsed, null, 2)
      setJsonInput(formatted)
      setError(undefined)
    } catch {
      setError({
        type: 'invalid-json',
        message: 'Invalid JSON format',
      })
    }
  }, [jsonInput])

  const clearAll = useCallback(() => {
    setJsonInput('')
    setTsOutput('')
    setError(undefined)
  }, [])

  const pasteFromClipboard = useCallback(async () => {
    try {
      const text = await navigator.clipboard.readText()
      setJsonInput(text)
      setError(undefined)
    } catch {
      setError({
        type: 'clipboard-read',
        message: 'Failed to read from clipboard',
      })
    }
  }, [])

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      setError({
        type: 'clipboard-write',
        message: 'Failed to copy to clipboard',
      })
    }
  }, [])

  const downloadFile = useCallback((content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/typescript' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = filename
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
    URL.revokeObjectURL(url)
  }, [])

  const loadExample = useCallback((json: string) => {
    setJsonInput(json)
    setError(undefined)
    setTsOutput('')
  }, [])

  const updateOutputFormat = useCallback((isInterface: boolean) => {
    setConversionOptions(prev => ({
      ...prev,
      outputFormat: isInterface ? 'interface' : 'type',
    }))
  }, [])

  const updateReadonlyFields = useCallback((enabled: boolean) => {
    setConversionOptions(prev => ({
      ...prev,
      readonlyFields: enabled,
    }))
  }, [])

  const updateOptionalFields = useCallback((enabled: boolean) => {
    setConversionOptions(prev => ({
      ...prev,
      optionalFields: enabled,
    }))
  }, [])

  return {
    jsonInput,
    setJsonInput,
    tsOutput,
    error,
    rootTypeName,
    setRootTypeName,
    conversionOptions,
    generateTypes,
    formatJson,
    clearAll,
    pasteFromClipboard,
    copyToClipboard,
    downloadFile,
    loadExample,
    updateOutputFormat,
    updateReadonlyFields,
    updateOptionalFields,
  }
}

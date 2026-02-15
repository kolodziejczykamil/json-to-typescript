'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { convertJsonToTypescript } from '../logic/converter'
import type { ConversionError, ConversionOptions } from '../types'
import { validateJson } from '../utils/json-validator'

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
  const [isJsonValid, setIsJsonValid] = useState<boolean>(true)
  const [errorLine, setErrorLine] = useState<number | undefined>()
  const validationTimeoutRef = useRef<NodeJS.Timeout>()

  const validateJsonInput = useCallback((input: string) => {
    if (validationTimeoutRef.current) {
      clearTimeout(validationTimeoutRef.current)
    }

    validationTimeoutRef.current = setTimeout(() => {
      const validation = validateJson(input)
      setIsJsonValid(validation.valid)
      if (!validation.valid) {
        setError({
          type: 'invalid-json',
          message: validation.error,
        })
        setErrorLine(validation.line)
      } else {
        setError(undefined)
        setErrorLine(undefined)
      }
    }, 300)
  }, [])

  useEffect(() => {
    validateJsonInput(jsonInput)
    return () => {
      if (validationTimeoutRef.current) {
        clearTimeout(validationTimeoutRef.current)
      }
    }
  }, [jsonInput, validateJsonInput])

  const generateTypes = useCallback(() => {
    if (!jsonInput.trim()) {
      setError({
        type: 'invalid-json',
        message: 'JSON input is empty',
      })
      setTsOutput('')
      setIsJsonValid(false)
      setErrorLine(undefined)
      return
    }

    const validation = validateJson(jsonInput)
    if (!validation.valid) {
      setError({
        type: 'invalid-json',
        message: validation.error,
      })
      setTsOutput('')
      setIsJsonValid(false)
      setErrorLine(validation.line)
      return
    }

    try {
      setError(undefined)
      setErrorLine(undefined)
      setIsJsonValid(true)
      const result = convertJsonToTypescript(jsonInput, rootTypeName, conversionOptions)
      setTsOutput(result)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error occurred'
      setError({
        type: 'invalid-json',
        message,
      })
      setTsOutput('')
      setIsJsonValid(false)
      setErrorLine(undefined)
    }
  }, [jsonInput, rootTypeName, conversionOptions])

  const formatJson = useCallback(() => {
    try {
      const parsed = JSON.parse(jsonInput)
      const formatted = JSON.stringify(parsed, null, 2)
      setJsonInput(formatted)
      setError(undefined)
      setErrorLine(undefined)
      setIsJsonValid(true)
    } catch {
      const validation = validateJson(jsonInput)
      setError({
        type: 'invalid-json',
        message: 'Invalid JSON format',
      })
      setIsJsonValid(false)
      setErrorLine(validation.valid ? undefined : validation.line)
    }
  }, [jsonInput])

  const clearAll = useCallback(() => {
    setJsonInput('')
    setTsOutput('')
    setError(undefined)
    setErrorLine(undefined)
    setIsJsonValid(true)
  }, [])

  const pasteFromClipboard = useCallback(async () => {
    try {
      const text = await navigator.clipboard.readText()
      setJsonInput(text)
      setError(undefined)
      setErrorLine(undefined)
      setIsJsonValid(true)
    } catch {
      setError({
        type: 'clipboard-read',
        message: 'Failed to read from clipboard',
      })
    }
  }, [])

  const copyToClipboard = useCallback(async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      setError({
        type: 'clipboard-write',
        message: 'Failed to copy to clipboard',
      })
      return false
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
    setErrorLine(undefined)
    setTsOutput('')
    setIsJsonValid(true)
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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
        event.preventDefault()
        if (isJsonValid) {
          generateTypes()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [generateTypes, isJsonValid])

  const memoizedOutput = useMemo(() => {
    if (!isJsonValid || !jsonInput.trim()) {
      return ''
    }
    try {
      return convertJsonToTypescript(jsonInput, rootTypeName, conversionOptions)
    } catch {
      return ''
    }
  }, [jsonInput, rootTypeName, conversionOptions, isJsonValid])

  return {
    jsonInput,
    setJsonInput,
    tsOutput,
    error,
    errorLine,
    rootTypeName,
    setRootTypeName,
    conversionOptions,
    isJsonValid,
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
    memoizedOutput,
  }
}

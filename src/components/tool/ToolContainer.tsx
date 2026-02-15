'use client'

import { useJsonToTs } from '@/features/json-to-ts'

import { JsonInput } from './JsonInput'
import { OptionsBar } from './OptionsBar'
import { QuickExamples } from './QuickExamples'
import { TsOutput } from './TsOutput'

export function ToolContainer() {
  const {
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
  } = useJsonToTs()

  const handleCopy = (): void => {
    void copyToClipboard(tsOutput)
  }

  const handleDownload = (): void => {
    downloadFile(tsOutput, `${rootTypeName}.ts`)
  }

  const errorMessage = error?.message ?? undefined

  return (
    <>
      <OptionsBar
        rootTypeName={rootTypeName}
        onRootTypeNameChange={setRootTypeName}
        outputFormat={conversionOptions.outputFormat === 'interface'}
        onOutputFormatChange={updateOutputFormat}
        readonlyFields={conversionOptions.readonlyFields}
        onReadonlyFieldsChange={updateReadonlyFields}
        optionalFields={conversionOptions.optionalFields}
        onOptionalFieldsChange={updateOptionalFields}
        onGenerate={generateTypes}
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="h-[calc(100vh-360px)] min-h-[500px]">
          <JsonInput
            value={jsonInput}
            onChange={setJsonInput}
            onFormat={formatJson}
            onClear={clearAll}
            onPaste={pasteFromClipboard}
            error={errorMessage}
          />
        </div>
        <div className="h-[calc(100vh-360px)] min-h-[500px]">
          <TsOutput
            content={tsOutput}
            onCopy={handleCopy}
            onDownload={handleDownload}
            hasContent={tsOutput.length > 0}
          />
        </div>
      </div>

      <div className="mt-6">
        <QuickExamples onLoadExample={loadExample} />
      </div>
    </>
  )
}

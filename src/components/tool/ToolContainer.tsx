'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { useJsonToTs } from '@/features/json-to-ts'
import { getTranslations } from '@/lib/i18n'

import { Toast, useToast } from '../ui/Toast'

import { JsonInput } from './JsonInput'
import { OptionsBar } from './OptionsBar'
import { QuickExamples } from './QuickExamples'
import { TsOutput } from './TsOutput'

export function ToolContainer() {
  const { language } = useLanguage()
  const t = getTranslations(language)
  const { toast, showToast, hideToast } = useToast()

  const {
    jsonInput,
    setJsonInput,
    tsOutput,
    error,
    errorLine,
    rootTypeName,
    setRootTypeName,
    conversionOptions,
    isJsonValid,
    isConverting,
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

  const handleCopy = async (): Promise<void> => {
    const success = await copyToClipboard(tsOutput)
    if (success) {
      showToast('Copied to clipboard!', 'success')
    } else {
      showToast('Failed to copy', 'error')
    }
  }

  const handleDownload = (): void => {
    downloadFile(tsOutput, `${rootTypeName}.ts`)
    showToast('Download TS file', 'success')
  }

  const errorMessage = error?.message

  return (
    <>
      <div className="mb-6 text-center">
        <h1 className="mb-2 text-3xl font-bold text-indigo-600 dark:text-indigo-400 md:text-4xl">
          {t.hero.title}
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 md:text-base">{t.hero.subtitle}</p>
      </div>

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
        isJsonValid={isJsonValid}
        isConverting={isConverting}
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
            errorLine={errorLine}
            isValid={isJsonValid}
          />
        </div>
        <div className="h-[calc(100vh-360px)] min-h-[500px]">
          <TsOutput
            content={tsOutput}
            onCopy={handleCopy}
            onDownload={handleDownload}
            hasContent={tsOutput.length > 0}
            isConverting={isConverting}
          />
        </div>
      </div>

      <div className="mt-6">
        <QuickExamples onLoadExample={loadExample} />
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={hideToast} />}
    </>
  )
}

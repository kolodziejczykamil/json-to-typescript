'use client'

import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { SeoContent } from '@/components/layout/SeoContent'
import { JsonInput } from '@/components/tool/JsonInput'
import { OptionsBar } from '@/components/tool/OptionsBar'
import { QuickExamples } from '@/components/tool/QuickExamples'
import { TsOutput } from '@/components/tool/TsOutput'
import { useLanguage } from '@/contexts/LanguageContext'
import { useJsonToTs } from '@/features/json-to-ts'
import { getTranslations } from '@/lib/i18n'

export default function Home() {
  const { language } = useLanguage()
  const t = getTranslations(language)

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
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="pt-16">
        <div className="mx-auto max-w-[1800px] px-4 py-6 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <h1 className="mb-2 text-3xl font-bold text-indigo-600 dark:text-indigo-400 md:text-4xl">
              {t.hero.title}
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 md:text-base">
              {t.hero.subtitle}
            </p>
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
        </div>

        <SeoContent />
      </main>
      <Footer />
    </div>
  )
}

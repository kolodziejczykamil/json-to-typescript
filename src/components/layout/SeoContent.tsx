'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/lib/i18n'

export function SeoContent() {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I convert JSON to TypeScript?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Simply paste your JSON into the input panel, configure your preferences for output format, optional fields, and readonly properties, then click generate. Our tool will automatically create TypeScript interfaces or types from your JSON structure. You can also use the keyboard shortcut Ctrl/Cmd + Enter to trigger conversion.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does this tool support nested objects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our JSON to TypeScript converter fully supports nested objects, arrays, and complex data structures. It automatically generates separate interfaces for nested objects and handles arrays of objects, mixed-type arrays, and null unions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I generate TypeScript types instead of interfaces?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, you can choose between interface and type declarations using the output format option in the settings panel. Both formats are fully supported and produce valid TypeScript code.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this tool free to use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our JSON to TypeScript converter is completely free to use. No registration required, and it works entirely in your browser. All processing happens locally, ensuring your data privacy.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if my JSON is invalid?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our tool provides real-time JSON validation with error highlighting. If your JSON is invalid, you will see a clear error message with the line and column number where the error occurs. The Generate Types button will be disabled until the JSON is valid.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-slate-100">
          {t.seo.title}
        </h2>

        <div className="prose prose-slate max-w-none dark:prose-invert">
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            {t.seo.paragraph1}
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Why Use This Tool?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">
            TypeScript brings type safety to JavaScript, helping you catch errors at compile time
            and improving code maintainability. When working with JSON data from APIs or external
            sources, manually creating TypeScript interfaces can be time-consuming and error-prone.
            Our converter automates this process, ensuring your types accurately reflect your JSON
            structure while saving valuable development time.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">
            Whether you&apos;re integrating a new API, working with configuration files, or
            processing data from external services, having proper TypeScript types is essential for
            building robust applications. Our tool eliminates the tedious task of manually writing
            interface definitions, allowing you to focus on building features instead of boilerplate
            code.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">
            The generated TypeScript interfaces are production-ready and follow best practices,
            including proper naming conventions, type safety, and support for complex data
            structures. You can customize the output to match your project&apos;s coding standards,
            choosing between interfaces and types, and configuring optional and readonly fields.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">
            Our tool is designed with developer experience in mind, featuring real-time validation,
            error highlighting, keyboard shortcuts, and an intuitive interface. All processing
            happens locally in your browser, ensuring your data never leaves your device and
            maintaining complete privacy.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">
            By using our JSON to TypeScript converter, you can reduce development time, improve code
            quality, and ensure type safety across your entire application. Start converting your
            JSON data to TypeScript types today and experience faster, more reliable development.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Use Cases
          </h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                API Integration
              </h3>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                When integrating with REST APIs or GraphQL endpoints, you often receive JSON
                responses that need to be typed. Our tool helps you quickly generate TypeScript
                interfaces from API response examples, ensuring type safety throughout your
                application.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                Configuration Files
              </h3>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                Configuration files often come in JSON format. Convert them to TypeScript types to
                get autocomplete, validation, and type checking for your configuration objects,
                reducing runtime errors and improving developer experience.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                Data Processing
              </h3>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                When processing data from external sources, databases, or file systems, having
                proper TypeScript types ensures data integrity and helps catch errors early in the
                development process.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                Frontend Development
              </h3>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                Frontend developers working with React, Vue, Angular, or other frameworks benefit
                from TypeScript types for props, state, and API responses. Our tool makes it easy to
                generate these types from JSON data structures.
              </p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            {t.seo.howTitle}
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">{t.seo.howText}</p>

          <h2 className="mt-12 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            {t.seo.featuresTitle}
          </h2>
          <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600 dark:text-indigo-400">✓</span>
              <span>{t.seo.feature1}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600 dark:text-indigo-400">✓</span>
              <span>{t.seo.feature2}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600 dark:text-indigo-400">✓</span>
              <span>{t.seo.feature3}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600 dark:text-indigo-400">✓</span>
              <span>{t.seo.feature4}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600 dark:text-indigo-400">✓</span>
              <span>{t.seo.feature5}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600 dark:text-indigo-400">✓</span>
              <span>{t.seo.feature6}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600 dark:text-indigo-400">✓</span>
              <span>Real-time JSON validation with error highlighting</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600 dark:text-indigo-400">✓</span>
              <span>Keyboard shortcuts for faster workflow</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600 dark:text-indigo-400">✓</span>
              <span>Customizable code output (font size, word wrap)</span>
            </li>
          </ul>

          <h2 className="mt-12 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                How do I convert JSON to TypeScript?
              </h3>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                Simply paste your JSON into the input panel, configure your preferences for output
                format, optional fields, and readonly properties, then click generate. Our tool will
                automatically create TypeScript interfaces or types from your JSON structure. You
                can also use the keyboard shortcut Ctrl/Cmd + Enter to trigger conversion.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                Does this tool support nested objects?
              </h3>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                Yes, our JSON to TypeScript converter fully supports nested objects, arrays, and
                complex data structures. It automatically generates separate interfaces for nested
                objects and handles arrays of objects, mixed-type arrays, and null unions.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                Can I generate TypeScript types instead of interfaces?
              </h3>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                Yes, you can choose between interface and type declarations using the output format
                option in the settings panel. Both formats are fully supported and produce valid
                TypeScript code.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                Is this tool free to use?
              </h3>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                Yes, our JSON to TypeScript converter is completely free to use. No registration
                required, and it works entirely in your browser. All processing happens locally,
                ensuring your data privacy.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                What happens if my JSON is invalid?
              </h3>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                Our tool provides real-time JSON validation with error highlighting. If your JSON is
                invalid, you will see a clear error message with the line and column number where
                the error occurs. The Generate Types button will be disabled until the JSON is
                valid.
              </p>
            </div>
          </div>

          <h2 className="mt-12 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            {t.seo.exampleTitle}
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">
            {t.seo.exampleIntro}
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100">
            <code>{`{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "profile": {
    "age": 30,
    "active": true
  }
}`}</code>
          </pre>
          <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">
            {t.seo.exampleOutput}
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100">
            <code>{`export interface Root {
  id: number
  name: string
  email: string
  profile: Profile
}

export interface Profile {
  age: number
  active: boolean
}`}</code>
          </pre>
          <p className="mt-6 leading-relaxed text-slate-700 dark:text-slate-300">
            {t.seo.exampleConclusion}
          </p>
        </div>
      </section>
    </>
  )
}

'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/lib/i18n'

type QuickExamplesProps = {
  readonly onLoadExample: (json: string) => void
}

const EXAMPLES = [
  {
    icon: '👤',
    titleKey: 'userProfile' as const,
    descriptionKey: 'userProfileDesc' as const,
    preview: '{ "id": 1, "name": "..." }',
    json: JSON.stringify(
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        isActive: true,
        age: 30,
        profile: {
          avatar: 'https://example.com/avatar.jpg',
          bio: 'Software developer',
          location: {
            city: 'New York',
            country: 'USA',
          },
        },
        skills: ['TypeScript', 'React', 'Node.js'],
        projects: 5,
      },
      null,
      2,
    ),
  },
  {
    icon: '🛒',
    titleKey: 'ecommerce' as const,
    descriptionKey: 'ecommerceDesc' as const,
    preview: '{ "products": [...]}',
    json: JSON.stringify(
      {
        products: [
          {
            id: 1,
            name: 'Laptop',
            price: 999.99,
            inStock: true,
            category: {
              id: 1,
              name: 'Electronics',
            },
            tags: ['new', 'popular'],
          },
          {
            id: 2,
            name: 'Mouse',
            price: 29.99,
            inStock: false,
            category: {
              id: 1,
              name: 'Electronics',
            },
            tags: ['accessory'],
          },
        ],
        total: 2,
      },
      null,
      2,
    ),
  },
  {
    icon: '📊',
    titleKey: 'analytics' as const,
    descriptionKey: 'analyticsDesc' as const,
    preview: '{ "metrics": {...} }',
    json: JSON.stringify(
      {
        metrics: {
          users: {
            total: 1250,
            active: 890,
            new: 45,
          },
          revenue: {
            total: 125000,
            monthly: 45000,
            growth: 12.5,
          },
          performance: {
            avgResponseTime: 120,
            uptime: 99.9,
            errors: 5,
          },
        },
        date: '2024-01-15',
      },
      null,
      2,
    ),
  },
  {
    icon: '🖥️',
    titleKey: 'apiResponse' as const,
    descriptionKey: 'apiResponseDesc' as const,
    preview: '{ "status": 200, ... }',
    json: JSON.stringify(
      {
        status: 200,
        message: 'Success',
        data: {
          items: [
            {
              id: 1,
              title: 'Item 1',
              completed: false,
            },
            {
              id: 2,
              title: 'Item 2',
              completed: true,
            },
          ],
          pagination: {
            page: 1,
            limit: 10,
            total: 2,
            hasMore: false,
          },
        },
        timestamp: '2024-01-15T10:30:00Z',
      },
      null,
      2,
    ),
  },
] as const

const TITLE_MAP: Record<string, keyof ReturnType<typeof getTranslations>['examples']> = {
  userProfile: 'userProfile',
  ecommerce: 'ecommerce',
  analytics: 'analytics',
  apiResponse: 'apiResponse',
}

export function QuickExamples({ onLoadExample }: QuickExamplesProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const scrollRight = (): void => {
    const container = document.getElementById('examples-container')
    if (container) {
      container.scrollBy({ left: 250, behavior: 'smooth' })
    }
  }

  const scrollLeft = (): void => {
    const container = document.getElementById('examples-container')
    if (container) {
      container.scrollBy({ left: -250, behavior: 'smooth' })
    }
  }

  return (
    <div className="mb-4">
      <div className="mb-3 text-center">
        <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          {t.examples.title}
        </h2>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{t.examples.subtitle}</p>
      </div>
      <div className="relative flex items-center justify-center">
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 rounded-lg bg-white p-1.5 text-slate-400 shadow-md transition-colors hover:bg-slate-50 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200"
          aria-label={t.aria.scrollLeft}
        >
          <span className="text-base">&lt;</span>
        </button>
        <div
          id="examples-container"
          className="flex w-full max-w-4xl items-stretch gap-3 overflow-x-auto px-10 pb-2 scrollbar-hide"
        >
          {EXAMPLES.map((example, index) => (
            <button
              key={index}
              onClick={() => onLoadExample(example.json)}
              className="flex min-w-[200px] flex-shrink-0 flex-col gap-2 rounded-lg border border-slate-200 bg-white p-3 text-left transition-all hover:border-indigo-400 hover:bg-indigo-50 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-500 dark:hover:bg-slate-700"
              aria-label={`Load ${t.examples[TITLE_MAP[example.titleKey]]} example`}
            >
              <div className="text-2xl">{example.icon}</div>
              <div className="w-full">
                <div className="mb-1 text-xs font-semibold text-slate-700 dark:text-white">
                  {t.examples[TITLE_MAP[example.titleKey]]}
                </div>
                <div className="mb-2 text-xs text-slate-500 dark:text-slate-400">
                  {t.examples[example.descriptionKey]}
                </div>
                <div className="rounded bg-slate-100 p-1.5 font-mono text-[10px] text-slate-600 dark:bg-slate-900 dark:text-slate-400">
                  {example.preview}
                </div>
              </div>
            </button>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 rounded-lg bg-white p-1.5 text-slate-400 shadow-md transition-colors hover:bg-slate-50 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200"
          aria-label={t.aria.scrollRight}
        >
          <span className="text-base">&gt;</span>
        </button>
      </div>
    </div>
  )
}

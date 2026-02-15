export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl">
            JSON → TypeScript Generator
          </h1>
          <p className="text-lg text-slate-400">Convert JSON to TypeScript types instantly</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-slate-700 bg-slate-800 p-6">
            <h2 className="mb-4 text-lg font-semibold text-slate-300">JSON Input</h2>
            <div className="min-h-[400px] rounded border border-slate-600 bg-slate-900 p-4 font-mono text-sm text-slate-400">
              <p className="text-slate-500">Paste your JSON here...</p>
            </div>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-800 p-6">
            <h2 className="mb-4 text-lg font-semibold text-slate-300">TypeScript Output</h2>
            <div className="min-h-[400px] rounded border border-slate-600 bg-slate-900 p-4 font-mono text-sm text-slate-400">
              <p className="text-slate-500">Generated types will appear here...</p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            disabled
            className="rounded-lg bg-indigo-600 px-8 py-3 font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50 hover:bg-indigo-700 disabled:hover:bg-indigo-600"
          >
            Generate TypeScript
          </button>
        </div>
      </div>
    </main>
  )
}

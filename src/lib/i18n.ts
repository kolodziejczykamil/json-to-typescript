export type Language = 'en' | 'pl'

export type Translations = {
  nav: {
    docs: string
    github: string
    star: string
  }
  hero: {
    title: string
    subtitle: string
  }
  options: {
    rootTypeName: string
    outputFormat: string
    readonlyFields: string
    optionalFields: string
    enable: string
    interface: string
  }
  buttons: {
    generate: string
    format: string
    paste: string
    clear: string
    copy: string
    download: string
  }
  panels: {
    jsonInput: string
    tsOutput: string
    generated: string
    placeholder: string
    placeholderOutput: string
  }
  examples: {
    title: string
    subtitle: string
    userProfile: string
    ecommerce: string
    analytics: string
    apiResponse: string
    userProfileDesc: string
    ecommerceDesc: string
    analyticsDesc: string
    apiResponseDesc: string
  }
  errors: {
    invalidJson: string
    clipboardRead: string
    clipboardWrite: string
  }
  aria: {
    formatJson: string
    pasteFromClipboard: string
    clearInput: string
    copyOutput: string
    downloadFile: string
    generateTypes: string
    scrollLeft: string
    scrollRight: string
    switchLanguage: string
    switchTheme: string
    mainNavigation: string
    home: string
    settings: string
    viewDocs: string
    viewGithub: string
    starGithub: string
  }
  theme: {
    light: string
    dark: string
  }
  seo: {
    title: string
    paragraph1: string
    whyTitle: string
    whyText: string
    howTitle: string
    howText: string
    featuresTitle: string
    feature1: string
    feature2: string
    feature3: string
    feature4: string
    feature5: string
    feature6: string
    exampleTitle: string
    exampleIntro: string
    exampleOutput: string
    exampleConclusion: string
  }
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      docs: 'Docs',
      github: 'GitHub',
      star: '2.4k',
    },
    hero: {
      title: 'Transform JSON to TypeScript Instantly',
      subtitle: 'Paste your JSON, get perfectly typed TypeScript interfaces in seconds',
    },
    options: {
      rootTypeName: 'Root Type Name:',
      outputFormat: 'Output Format:',
      readonlyFields: 'Readonly Fields:',
      optionalFields: 'Optional Fields:',
      enable: 'Enable',
      interface: 'Interface',
    },
    buttons: {
      generate: 'Generate Types',
      format: 'Format',
      paste: 'Paste',
      clear: 'Clear',
      copy: 'Copy',
      download: 'Download',
    },
    panels: {
      jsonInput: 'JSON Input',
      tsOutput: 'TypeScript Output',
      generated: 'Generated',
      placeholder: 'Paste your JSON here...',
      placeholderOutput: 'Generated types will appear here...',
    },
    examples: {
      title: 'Quick Examples',
      subtitle: 'Click any example to load it instantly',
      userProfile: 'User Profile',
      ecommerce: 'E-commerce',
      analytics: 'Analytics',
      apiResponse: 'API Response',
      userProfileDesc: 'Basic user data',
      ecommerceDesc: 'Product catalog',
      analyticsDesc: 'Dashboard data',
      apiResponseDesc: 'REST endpoint',
    },
    errors: {
      invalidJson: 'Invalid JSON',
      clipboardRead: 'Failed to read from clipboard',
      clipboardWrite: 'Failed to copy to clipboard',
    },
    aria: {
      formatJson: 'Format JSON',
      pasteFromClipboard: 'Paste from clipboard',
      clearInput: 'Clear input',
      copyOutput: 'Copy TypeScript output to clipboard',
      downloadFile: 'Download TypeScript file',
      generateTypes: 'Generate TypeScript types from JSON',
      scrollLeft: 'Scroll left',
      scrollRight: 'Scroll right',
      switchLanguage: 'Switch language',
      switchTheme: 'Switch theme',
      mainNavigation: 'Main navigation',
      home: 'JSON to TypeScript Generator Home',
      settings: 'Settings',
      viewDocs: 'View documentation',
      viewGithub: 'View GitHub repository',
      starGithub: 'Star on GitHub',
    },
    theme: {
      light: 'Light',
      dark: 'Dark',
    },
    seo: {
      title: 'Convert JSON to TypeScript Interfaces Instantly',
      paragraph1:
        "Our free online JSON to TypeScript converter allows you to transform any JSON object into properly typed TypeScript interfaces in seconds. Whether you're working with API responses, configuration files, or data structures, this tool generates clean, production-ready TypeScript code that you can copy directly into your project.",
      whyTitle: 'Why Convert JSON to TypeScript?',
      whyText:
        'TypeScript brings type safety to JavaScript, helping you catch errors at compile time and improving code maintainability. When working with JSON data from APIs or external sources, manually creating TypeScript interfaces can be time-consuming and error-prone. Our converter automates this process, ensuring your types accurately reflect your JSON structure while saving valuable development time.',
      howTitle: 'How It Works',
      howText:
        'Simply paste your JSON into the input panel, configure your preferences for output format, optional fields, and readonly properties, then click generate. Our intelligent parser analyzes your JSON structure recursively, handling nested objects, arrays, and complex data types. The generated TypeScript interfaces use PascalCase naming conventions and include proper type annotations for strings, numbers, booleans, and null values.',
      featuresTitle: 'Features',
      feature1:
        'Nested Object Support: Automatically generates separate interfaces for nested objects and arrays',
      feature2:
        'Flexible Output: Choose between interface or type declarations based on your project needs',
      feature3: 'Optional Fields: Configure whether fields should be optional or required',
      feature4: 'Readonly Properties: Generate readonly fields for immutable data structures',
      feature5: 'Export Options: Copy to clipboard or download as a TypeScript file',
      feature6:
        'No Registration Required: Free to use, no account needed, works entirely in your browser',
      exampleTitle: 'Example',
      exampleIntro:
        "Here's a quick example of how our JSON to TypeScript converter works. Input a JSON object like this:",
      exampleOutput: 'And get clean TypeScript interfaces:',
      exampleConclusion:
        'Perfect for integrating API responses, configuration files, or any JSON data into your TypeScript projects. Start converting your JSON to TypeScript today and experience faster, more reliable development.',
    },
  },
  pl: {
    nav: {
      docs: 'Dokumentacja',
      github: 'GitHub',
      star: '2.4k',
    },
    hero: {
      title: 'Konwertuj JSON na TypeScript Natychmiast',
      subtitle: 'Wklej JSON i otrzymaj idealnie typowane interfejsy TypeScript w sekundach',
    },
    options: {
      rootTypeName: 'Nazwa typu głównego:',
      outputFormat: 'Format wyjściowy:',
      readonlyFields: 'Pola tylko do odczytu:',
      optionalFields: 'Pola opcjonalne:',
      enable: 'Włącz',
      interface: 'Interfejs',
    },
    buttons: {
      generate: 'Generuj Typy',
      format: 'Formatuj',
      paste: 'Wklej',
      clear: 'Wyczyść',
      copy: 'Kopiuj',
      download: 'Pobierz',
    },
    panels: {
      jsonInput: 'Wejście JSON',
      tsOutput: 'Wyjście TypeScript',
      generated: 'Wygenerowano',
      placeholder: 'Wklej tutaj swój JSON...',
      placeholderOutput: 'Wygenerowane typy pojawią się tutaj...',
    },
    examples: {
      title: 'Szybkie Przykłady',
      subtitle: 'Kliknij przykład, aby załadować go natychmiast',
      userProfile: 'Profil Użytkownika',
      ecommerce: 'E-commerce',
      analytics: 'Analityka',
      apiResponse: 'Odpowiedź API',
      userProfileDesc: 'Podstawowe dane użytkownika',
      ecommerceDesc: 'Katalog produktów',
      analyticsDesc: 'Dane dashboardu',
      apiResponseDesc: 'Endpoint REST',
    },
    errors: {
      invalidJson: 'Nieprawidłowy JSON',
      clipboardRead: 'Nie udało się odczytać ze schowka',
      clipboardWrite: 'Nie udało się skopiować do schowka',
    },
    aria: {
      formatJson: 'Formatuj JSON',
      pasteFromClipboard: 'Wklej ze schowka',
      clearInput: 'Wyczyść pole',
      copyOutput: 'Skopiuj wyjście TypeScript do schowka',
      downloadFile: 'Pobierz plik TypeScript',
      generateTypes: 'Generuj typy TypeScript z JSON',
      scrollLeft: 'Przewiń w lewo',
      scrollRight: 'Przewiń w prawo',
      switchLanguage: 'Zmień język',
      switchTheme: 'Zmień motyw',
      mainNavigation: 'Główna nawigacja',
      home: 'Strona główna JSON to TypeScript Generator',
      settings: 'Ustawienia',
      viewDocs: 'Zobacz dokumentację',
      viewGithub: 'Zobacz repozytorium GitHub',
      starGithub: 'Oznacz gwiazdką na GitHub',
    },
    theme: {
      light: 'Jasny',
      dark: 'Ciemny',
    },
    seo: {
      title: 'Konwertuj JSON na Interfejsy TypeScript Natychmiast',
      paragraph1:
        'Nasz darmowy konwerter JSON na TypeScript pozwala przekształcić dowolny obiekt JSON w poprawnie typowane interfejsy TypeScript w kilka sekund. Niezależnie od tego, czy pracujesz z odpowiedziami API, plikami konfiguracyjnymi czy strukturami danych, to narzędzie generuje czysty, gotowy do produkcji kod TypeScript, który możesz skopiować bezpośrednio do swojego projektu.',
      whyTitle: 'Dlaczego Konwertować JSON na TypeScript?',
      whyText:
        'TypeScript wprowadza bezpieczeństwo typów do JavaScript, pomagając wychwytywać błędy w czasie kompilacji i poprawiając utrzymywalność kodu. Podczas pracy z danymi JSON z API lub zewnętrznych źródeł, ręczne tworzenie interfejsów TypeScript może być czasochłonne i podatne na błędy. Nasz konwerter automatyzuje ten proces, zapewniając, że typy dokładnie odzwierciedlają strukturę JSON, jednocześnie oszczędzając cenny czas programistyczny.',
      howTitle: 'Jak to Działa',
      howText:
        'Po prostu wklej swój JSON do panelu wejściowego, skonfiguruj preferencje dotyczące formatu wyjściowego, pól opcjonalnych i właściwości tylko do odczytu, a następnie kliknij generuj. Nasz inteligentny parser analizuje strukturę JSON rekurencyjnie, obsługując zagnieżdżone obiekty, tablice i złożone typy danych. Wygenerowane interfejsy TypeScript używają konwencji nazewnictwa PascalCase i zawierają odpowiednie adnotacje typów dla stringów, liczb, wartości logicznych i null.',
      featuresTitle: 'Funkcje',
      feature1:
        'Obsługa Zagnieżdżonych Obiektów: Automatycznie generuje oddzielne interfejsy dla zagnieżdżonych obiektów i tablic',
      feature2:
        'Elastyczne Wyjście: Wybierz między deklaracjami interfejsu lub typu w zależności od potrzeb projektu',
      feature3: 'Pola Opcjonalne: Skonfiguruj, czy pola powinny być opcjonalne czy wymagane',
      feature4:
        'Właściwości Tylko do Odczytu: Generuj pola tylko do odczytu dla niezmiennych struktur danych',
      feature5: 'Opcje Eksportu: Skopiuj do schowka lub pobierz jako plik TypeScript',
      feature6:
        'Bez Rejestracji: Darmowe w użyciu, bez potrzeby konta, działa całkowicie w przeglądarce',
      exampleTitle: 'Przykład',
      exampleIntro:
        'Oto szybki przykład działania naszego konwertera JSON na TypeScript. Wprowadź obiekt JSON taki jak ten:',
      exampleOutput: 'I otrzymaj czyste interfejsy TypeScript:',
      exampleConclusion:
        'Idealne do integracji odpowiedzi API, plików konfiguracyjnych lub dowolnych danych JSON z projektami TypeScript. Zacznij konwertować swój JSON na TypeScript już dziś i doświadcz szybszego, bardziej niezawodnego rozwoju.',
    },
  },
}

export function getTranslations(lang: Language): Translations {
  return translations[lang]
}

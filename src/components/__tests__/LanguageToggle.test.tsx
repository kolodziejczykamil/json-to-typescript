import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { LanguageProvider } from '@/contexts/LanguageContext'
import { LanguageToggle } from '../ui/LanguageToggle'

const renderWithProvider = (component: React.ReactElement) => {
  return render(<LanguageProvider>{component}</LanguageProvider>)
}

describe('LanguageToggle', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should render language toggle button', () => {
    renderWithProvider(<LanguageToggle />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should toggle language on click', async () => {
    const user = userEvent.setup()
    renderWithProvider(<LanguageToggle />)
    const button = screen.getByRole('button')

    await user.click(button)
    expect(localStorage.getItem('language')).toBe('pl')

    await user.click(button)
    expect(localStorage.getItem('language')).toBe('en')
  })

  it('should show correct flag for English', () => {
    renderWithProvider(<LanguageToggle />)
    expect(screen.getByText('🇵🇱')).toBeInTheDocument()
  })
})

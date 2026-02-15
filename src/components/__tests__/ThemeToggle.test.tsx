import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ThemeProvider } from '@/contexts/ThemeContext'
import { ThemeToggle } from '../ui/ThemeToggle'

const renderWithProvider = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>)
}

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should render theme toggle button', () => {
    renderWithProvider(<ThemeToggle />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should toggle theme on click', async () => {
    const user = userEvent.setup()
    renderWithProvider(<ThemeToggle />)
    const button = screen.getByRole('button')

    await user.click(button)
    expect(document.documentElement.classList.contains('light')).toBe(true)

    await user.click(button)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('should show correct icon for dark theme', () => {
    renderWithProvider(<ThemeToggle />)
    expect(screen.getByText('☀️')).toBeInTheDocument()
  })
})

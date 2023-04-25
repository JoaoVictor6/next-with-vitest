import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Header } from './Header'

describe('Component', () => {
  it('should render a children', () => {
    const { getAllByText } = render(<Header>Content</Header>)
  
    expect(getAllByText(/Content/)).toBeTruthy()
  })
})
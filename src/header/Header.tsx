import React, { ReactNode } from 'react'

import font from '@next/font/local'

export const helveticaNeue = font({
  src: './commici.ttf',
  display: 'swap'
})

export function Header({ children }: { children: ReactNode }) {
  return (
    <div>{children}</div>
  )
}

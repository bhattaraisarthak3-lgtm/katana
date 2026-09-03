import { ElementType, HTMLAttributes, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

interface RevealProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  as?: ElementType
  delay?: number
  threshold?: number
}

export default function Reveal({ children, as: Tag = 'div', delay = 0, threshold, className = '', style, ...rest }: RevealProps) {
  const ref = useReveal<HTMLElement>(threshold)

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

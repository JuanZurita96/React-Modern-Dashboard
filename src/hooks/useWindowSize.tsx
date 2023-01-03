import { useState, useLayoutEffect, useEffect } from 'react'

interface WindowSize {
  width: number
  height: number
}

export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export const useWindowDimension = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  })

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }
  useIsomorphicLayoutEffect(() => {
    handleSize()
    window.addEventListener('resize', handleSize)
    return () => window.removeEventListener('resize', handleSize)
  }, [])

  return windowSize
}

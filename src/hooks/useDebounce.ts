import { useEffect, useRef } from 'react'

type Callback<TArgs extends unknown[]> = (...args: TArgs) => void

const useDebounce = <TArgs extends unknown[]>(cb: Callback<TArgs>, wait: number): ((...args: TArgs) => void) => {
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null)

  const debouncedCallback = (...args: TArgs) => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current)
    }
    timeoutIdRef.current = setTimeout(() => {
      cb(...args)
    }, wait)
  }

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current)
      }
    }
  }, [])

  return debouncedCallback
}

export default useDebounce

import { RefObject, useEffect } from 'react'

interface UseClickOutsideProps<T> {
  ref: RefObject<T>
  handler: () => void
}

export function useClickOutside<T>({ ref, handler }: UseClickOutsideProps<T>) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler()
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

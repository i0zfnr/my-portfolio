import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const glow = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = glow.current
    if (!element || !matchMedia('(pointer: fine)').matches) return

    let frame = 0
    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        element.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
        element.dataset.visible = 'true'
      })
    }
    const hide = () => { element.dataset.visible = 'false' }

    window.addEventListener('pointermove', move)
    document.addEventListener('mouseleave', hide)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', move)
      document.removeEventListener('mouseleave', hide)
    }
  }, [])

  return <div className="cursor-glow" ref={glow} aria-hidden="true" />
}

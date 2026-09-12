import { useState, useEffect, useCallback } from 'react'

function getCleanPath(): string {
  if (typeof window === 'undefined') return '/'
  
  // Support hash routing fallback (e.g. #/projects/myokucare)
  if (window.location.hash.startsWith('#/')) {
    return window.location.hash.slice(1)
  }
  
  return window.location.pathname || '/'
}

export function useRouter() {
  const [currentPath, setCurrentPath] = useState<string>(getCleanPath)

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(getCleanPath())
    }

    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener('hashchange', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('hashchange', handleLocationChange)
    }
  }, [])

  const navigate = useCallback((path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path)
      setCurrentPath(path)
      // @ts-expect-error - lenis global instance
      if (window.__lenis) {
        // @ts-expect-error - lenis global instance
        window.__lenis.scrollTo(0, { immediate: true })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }, [])

  const navigateSection = useCallback((sectionId: string) => {
    const performScroll = () => {
      const el = document.getElementById(sectionId)
      if (!el) return
      // @ts-expect-error - lenis global instance
      if (window.__lenis) {
        // @ts-expect-error - lenis global instance
        window.__lenis.scrollTo(el, { offset: -74, duration: 1.1 })
      } else {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }

    if (currentPath !== '/') {
      window.history.pushState({}, '', '/')
      setCurrentPath('/')
      setTimeout(performScroll, 60)
    } else {
      performScroll()
    }
  }, [currentPath])

  return { currentPath, navigate, navigateSection }
}

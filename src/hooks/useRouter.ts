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
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])

  const navigateSection = useCallback((sectionId: string) => {
    if (currentPath !== '/') {
      window.history.pushState({}, '', '/')
      setCurrentPath('/')
      setTimeout(() => {
        const el = document.getElementById(sectionId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    } else {
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [currentPath])

  return { currentPath, navigate, navigateSection }
}

import { useEffect, useRef } from 'react'

type RGB = [number, number, number]

interface Particle {
  baseX: number
  baseY: number
  x: number
  y: number
  vx: number
  vy: number
  scale: number
  lengthSeed: number
  opacity: number
  phase: number
}

const LIGHT_COLORS: [RGB, RGB, RGB] = [
  [44, 100, 237],
  [248, 66, 66],
  [255, 207, 3],
]

const DARK_COLORS: [RGB, RGB, RGB] = [
  [113, 137, 255],
  [48, 116, 249],
  [4, 7, 14],
]

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value))
const lerp = (from: number, to: number, amount: number) => from + (to - from) * amount

const SIMPLEX_GRADIENTS: ReadonlyArray<RGB> = [
  [1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0],
  [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1],
  [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1],
]

function createSimplexNoise(seed: number) {
  const source = Array.from({ length: 256 }, (_, index) => index)
  let state = seed >>> 0

  const random = () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0
    return state / 4294967296
  }

  for (let index = source.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1))
    ;[source[index], source[swapIndex]] = [source[swapIndex], source[index]]
  }

  const permutation = new Uint8Array(512)
  for (let index = 0; index < permutation.length; index += 1) {
    permutation[index] = source[index & 255]
  }

  return (x: number, y: number, z: number) => {
    const skew = (x + y + z) / 3
    const i = Math.floor(x + skew)
    const j = Math.floor(y + skew)
    const k = Math.floor(z + skew)
    const unskew = (i + j + k) / 6
    const x0 = x - (i - unskew)
    const y0 = y - (j - unskew)
    const z0 = z - (k - unskew)

    let i1: number
    let j1: number
    let k1: number
    let i2: number
    let j2: number
    let k2: number

    if (x0 >= y0) {
      if (y0 >= z0) {
        i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0
      } else if (x0 >= z0) {
        i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1
      } else {
        i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1
      }
    } else if (y0 < z0) {
      i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1
    } else if (x0 < z0) {
      i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1
    } else {
      i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0
    }

    const x1 = x0 - i1 + 1 / 6
    const y1 = y0 - j1 + 1 / 6
    const z1 = z0 - k1 + 1 / 6
    const x2 = x0 - i2 + 1 / 3
    const y2 = y0 - j2 + 1 / 3
    const z2 = z0 - k2 + 1 / 3
    const x3 = x0 - 0.5
    const y3 = y0 - 0.5
    const z3 = z0 - 0.5

    const ii = i & 255
    const jj = j & 255
    const kk = k & 255
    const gradientIndex = (offsetI: number, offsetJ: number, offsetK: number) => (
      permutation[ii + offsetI + permutation[jj + offsetJ + permutation[kk + offsetK]]] % 12
    )

    const contribution = (cx: number, cy: number, cz: number, gradient: RGB) => {
      let influence = 0.6 - cx * cx - cy * cy - cz * cz
      if (influence < 0) return 0
      influence *= influence
      return influence * influence * (gradient[0] * cx + gradient[1] * cy + gradient[2] * cz)
    }

    const n0 = contribution(x0, y0, z0, SIMPLEX_GRADIENTS[gradientIndex(0, 0, 0)])
    const n1 = contribution(x1, y1, z1, SIMPLEX_GRADIENTS[gradientIndex(i1, j1, k1)])
    const n2 = contribution(x2, y2, z2, SIMPLEX_GRADIENTS[gradientIndex(i2, j2, k2)])
    const n3 = contribution(x3, y3, z3, SIMPLEX_GRADIENTS[gradientIndex(1, 1, 1)])

    return 32 * (n0 + n1 + n2 + n3)
  }
}

const simplexNoise3D = createSimplexNoise(0x48414649)

function smoothstep(edge0: number, edge1: number, value: number) {
  const progress = clamp((value - edge0) / (edge1 - edge0))
  return progress * progress * (3 - 2 * progress)
}

function fieldNoise(x: number, y: number, time: number, seed = 0) {
  return simplexNoise3D(x + seed * 0.013, y - seed * 0.009, time + seed * 0.007)
}

function mixColor(first: RGB, second: RGB, amount: number): RGB {
  return [
    Math.round(lerp(first[0], second[0], amount)),
    Math.round(lerp(first[1], second[1], amount)),
    Math.round(lerp(first[2], second[2], amount)),
  ]
}

function sampleColor(colors: [RGB, RGB, RGB], progress: number): RGB {
  const middle = 0.8
  if (progress <= middle) return mixColor(colors[0], colors[1], progress / middle)
  return mixColor(colors[1], colors[2], (progress - middle) / (1 - middle))
}

function createPoissonPoints(width: number, height: number, minimumDistance: number) {
  const cellSize = minimumDistance / Math.SQRT2
  const columns = Math.ceil(width / cellSize)
  const rows = Math.ceil(height / cellSize)
  const grid = new Int32Array(columns * rows)
  grid.fill(-1)

  const points: Array<[number, number]> = []
  const active: number[] = []
  const tries = 20

  const addPoint = (x: number, y: number) => {
    const index = points.length
    points.push([x, y])
    active.push(index)
    grid[Math.floor(y / cellSize) * columns + Math.floor(x / cellSize)] = index
  }

  addPoint(Math.random() * width, Math.random() * height)

  while (active.length > 0) {
    const activeSlot = Math.floor(Math.random() * active.length)
    const origin = points[active[activeSlot]]
    let placed = false

    for (let attempt = 0; attempt < tries; attempt += 1) {
      const angle = Math.random() * Math.PI * 2
      const radius = minimumDistance * (1 + Math.random())
      const x = origin[0] + Math.cos(angle) * radius
      const y = origin[1] + Math.sin(angle) * radius

      if (x < 0 || x >= width || y < 0 || y >= height) continue

      const cellX = Math.floor(x / cellSize)
      const cellY = Math.floor(y / cellSize)
      let valid = true

      for (let offsetY = -2; offsetY <= 2 && valid; offsetY += 1) {
        for (let offsetX = -2; offsetX <= 2; offsetX += 1) {
          const nearbyX = cellX + offsetX
          const nearbyY = cellY + offsetY
          if (nearbyX < 0 || nearbyX >= columns || nearbyY < 0 || nearbyY >= rows) continue

          const nearbyIndex = grid[nearbyY * columns + nearbyX]
          if (nearbyIndex === -1) continue

          const nearby = points[nearbyIndex]
          if (Math.hypot(x - nearby[0], y - nearby[1]) < minimumDistance) {
            valid = false
            break
          }
        }
      }

      if (valid) {
        addPoint(x, y)
        placed = true
        break
      }
    }

    if (!placed) active.splice(activeSlot, 1)
  }

  return points
}

export function AntigravityParticles() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const pointerSurface = (container.closest('.hero-section') as HTMLElement | null) ?? container
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = container.clientWidth
    let height = container.clientHeight
    let particles: Particle[] = []
    let animationFrameId = 0
    let isVisible = true
    let isDark = document.documentElement.dataset.theme === 'dark'
    let startTime = performance.now()
    let lastFrameTime = startTime

    const cursor = {
      x: width * 0.5,
      y: height * 0.42,
      velocityX: 0,
      velocityY: 0,
      energy: 0,
      pulse: 0,
      active: false,
    }

    const ring = {
      x: width * 0.5,
      y: height * 0.42,
      targetX: width * 0.5,
      targetY: height * 0.42,
    }

    const createParticles = () => {
      const minimumDistance = width < 768 ? 19 : clamp(Math.sqrt(width * height) / 48, 21, 31)
      particles = createPoissonPoints(width, height, minimumDistance).map(([x, y]) => ({
        baseX: x,
        baseY: y,
        x,
        y,
        vx: 0,
        vy: 0,
        scale: 0,
        lengthSeed: 0.72 + Math.random() * 0.58,
        opacity: 0.48 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
      }))
    }

    const resizeCanvas = () => {
      const nextWidth = container.clientWidth
      const nextHeight = container.clientHeight
      if (nextWidth <= 0 || nextHeight <= 0) return
      if (nextWidth === width && nextHeight === height && particles.length > 0) return

      width = nextWidth
      height = nextHeight
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(height * pixelRatio)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

      cursor.x = width * 0.5
      cursor.y = height * 0.42
      cursor.velocityX = 0
      cursor.velocityY = 0
      cursor.energy = 0
      cursor.pulse = 0
      ring.x = cursor.x
      ring.y = cursor.y
      ring.targetX = cursor.x
      ring.targetY = cursor.y
      createParticles()
    }

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = container.getBoundingClientRect()
      const nextX = clamp(event.clientX - bounds.left, 0, width)
      const nextY = clamp(event.clientY - bounds.top, 0, height)

      if (cursor.active) {
        const movementX = nextX - cursor.x
        const movementY = nextY - cursor.y
        const speed = Math.hypot(movementX, movementY)
        cursor.velocityX = lerp(cursor.velocityX, movementX, 0.38)
        cursor.velocityY = lerp(cursor.velocityY, movementY, 0.38)
        cursor.energy = Math.max(cursor.energy, clamp(speed / 34))
        if (speed > 4) cursor.pulse = 0
      }

      cursor.x = nextX
      cursor.y = nextY
      cursor.active = true
    }

    const handlePointerLeave = () => {
      cursor.active = false
    }

    const render = () => {
      if (!isVisible) {
        animationFrameId = 0
        return
      }

      const now = performance.now()
      const time = (now - startTime) * 0.001
      const delta = clamp((now - lastFrameTime) / 16.667, 0.25, 2)
      lastFrameTime = now
      const minimumDimension = Math.min(width, height)

      // Blend cursor input with autonomous drift so the field stays alive while
      // still travelling towards the pointer instead of attaching to it.
      const driftX = fieldNoise(time * 0.66, 0.31, time * 0.12, 94.234) * width * 0.07
      const driftY = fieldNoise(0.73, time * 0.75, time * 0.1, 21.028) * height * 0.045
      const centreX = width * 0.5
      const centreY = height * 0.42

      if (cursor.active) {
        ring.targetX = centreX + (cursor.x - centreX) * 0.82 + driftX
        ring.targetY = centreY + (cursor.y - centreY) * 0.82 + driftY
      } else {
        ring.targetX = centreX + driftX
        ring.targetY = centreY + driftY
      }

      const ringFollow = (cursor.active ? 0.072 : 0.018) * delta
      ring.x = lerp(ring.x, ring.targetX, ringFollow)
      ring.y = lerp(ring.y, ring.targetY, ringFollow)

      const ringRadius = 0.315 + Math.sin(time) * 0.038 + Math.cos(time * 3) * 0.024
      const narrowWidth = 0.011
      const broadWidth = 0.14
      cursor.energy *= Math.pow(0.925, delta)
      cursor.velocityX *= Math.pow(0.88, delta)
      cursor.velocityY *= Math.pow(0.88, delta)
      cursor.pulse = Math.min(0.26, cursor.pulse + 0.012 * delta)
      const wakeRadius = ringRadius + 0.04 + cursor.pulse

      context.clearRect(0, 0, width, height)
      context.lineCap = 'round'

      for (const particle of particles) {
        const normalX = (particle.baseX - centreX) / minimumDimension
        const normalY = (particle.baseY - centreY) / minimumDimension
        const ringX = (particle.baseX - ring.x) / minimumDimension
        const ringY = (particle.baseY - ring.y) / minimumDimension
        const distance = Math.hypot(ringX, ringY)
        const angle = Math.atan2(ringY, ringX)

        const distortedDistance = distance + fieldNoise(
          normalX * 0.2 + 18.4924,
          normalY * 0.2 + 72.9744,
          time * 0.25,
          particle.phase,
        ) * 0.005

        const narrowBand = smoothstep(ringRadius - narrowWidth * 2, ringRadius, distance)
          - smoothstep(ringRadius, ringRadius + narrowWidth, distortedDistance)
        const broadBand = smoothstep(ringRadius - broadWidth * 2, ringRadius, distance)
          - smoothstep(ringRadius, ringRadius + broadWidth, distortedDistance)
        const innerField = 1 - smoothstep(ringRadius, ringRadius + broadWidth, distance)
        const wakeBand = 1 - smoothstep(0.008, 0.034, Math.abs(distance - wakeRadius))

        const baseNoise = fieldNoise(
          normalX * 2 + 18.4924,
          normalY * 2 + 72.9744,
          time * 0.25,
          particle.phase,
        )
        const fineScaleNoise = fieldNoise(
          normalX * 30 + 11.4924,
          normalY * 30 + 12.9744,
          time * 0.25,
          particle.phase,
        )

        const ambientScale = 0.1 + Math.pow(clamp((baseNoise + 1) * 0.5), 2) * 0.24
        let targetScale = ambientScale + Math.pow(clamp(narrowBand), 2)
        targetScale += Math.pow(clamp(broadBand), 3) * 3
        targetScale += innerField * 0.34
        targetScale += fineScaleNoise * innerField * 0.18
        targetScale += Math.pow(clamp((baseNoise + 1.32) * 0.43), 2) * 0.5
        targetScale += wakeBand * cursor.energy * 1.65
        targetScale = Math.max(0, targetScale)
        particle.scale = lerp(particle.scale, targetScale, 0.24 * delta)

        const middleNoiseX = fieldNoise(
          normalX * 4 + 88.494,
          normalY * 4 + 32.4397,
          time * 0.175,
          particle.phase,
        )
        const middleNoiseY = fieldNoise(
          normalX * 4 + 50.904,
          normalY * 4 + 120.947,
          time * 0.175,
          particle.phase + 2.1,
        )
        const closeNoiseX = fieldNoise(
          normalX * 20 + 18.4924,
          normalY * 20 + 72.9744,
          time * 0.25,
          particle.phase,
        )
        const closeNoiseY = fieldNoise(
          normalX * 20 + 50.904,
          normalY * 20 + 120.947,
          time * 0.25,
          particle.phase + 1.4,
        )

        let displacementX = (middleNoiseX * 0.03 + closeNoiseX * 0.005) * minimumDimension
        let displacementY = (middleNoiseY * 0.03 + closeNoiseY * 0.005) * minimumDimension
        displacementX += Math.sin(normalX * 20 + time * 4) * 0.02 * clamp(distance, 0, 1) * minimumDimension
        displacementY += Math.cos(normalY * 20 + time * 3) * 0.02 * clamp(distance, 0, 1) * minimumDimension

        const ringStrength = Math.pow(clamp(broadBand), 0.75)
        const wakeStrength = wakeBand * cursor.energy
        const pushDistance = (ringStrength * 0.088 + wakeStrength * 0.075) * minimumDimension
        const unitX = ringX / Math.max(distance, 0.0001)
        const unitY = ringY / Math.max(distance, 0.0001)

        const targetX = particle.baseX + displacementX + unitX * pushDistance
          + cursor.velocityX * wakeStrength * 0.75
        const targetY = particle.baseY + displacementY + unitY * pushDistance
          + cursor.velocityY * wakeStrength * 0.75

        particle.vx = (particle.vx + (targetX - particle.x) * 0.095 * delta) * Math.pow(0.8, delta)
        particle.vy = (particle.vy + (targetY - particle.y) * 0.095 * delta) * Math.pow(0.8, delta)
        particle.x += particle.vx * delta
        particle.y += particle.vy * delta

        const visibleScale = clamp((particle.scale - 0.035) / 0.38)
        if (visibleScale < 0.01) continue

        const noiseAngle = fieldNoise(
          normalX * 10 + 18.4924,
          normalY * 10 + 72.9744,
          time * 0.85,
          particle.phase,
        )
        const rotation = angle + Math.PI / 2 + noiseAngle * 0.5

        let colorProgress = fieldNoise(
          normalX * 2 + 74.664,
          normalY * 2 + 91.556,
          time * 0.5,
          particle.phase * 0.18,
        )
        colorProgress = clamp(Math.pow((colorProgress + 1) * 0.5, 2) / 0.75)
        const color = sampleColor(isDark ? DARK_COLORS : LIGHT_COLORS, colorProgress)

        const length = (1.05 + particle.scale * 2.25 + wakeStrength * 2.2) * particle.lengthSeed
        const thickness = 0.58 + particle.scale * 0.64
        const alpha = clamp(0.08 + visibleScale * particle.opacity, 0, 0.98)

        context.save()
        context.translate(particle.x, particle.y)
        context.rotate(rotation)
        context.globalAlpha = alpha
        context.strokeStyle = `rgb(${color[0]} ${color[1]} ${color[2]})`
        context.lineWidth = thickness
        context.beginPath()
        context.moveTo(-length / 2, 0)
        context.lineTo(length / 2, 0)
        context.stroke()
        context.restore()
      }

      if (!reducedMotion) animationFrameId = requestAnimationFrame(render)
    }

    const themeObserver = new MutationObserver(() => {
      isDark = document.documentElement.dataset.theme === 'dark'
    })
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    const resizeObserver = new ResizeObserver(resizeCanvas)
    resizeObserver.observe(container)

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
      if (isVisible && animationFrameId === 0 && !reducedMotion) {
        lastFrameTime = performance.now()
        render()
      }
    }, { threshold: 0.02 })
    visibilityObserver.observe(container)

    pointerSurface.addEventListener('pointermove', handlePointerMove, { passive: true })
    pointerSurface.addEventListener('pointerleave', handlePointerLeave, { passive: true })

    resizeCanvas()
    render()

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
      pointerSurface.removeEventListener('pointermove', handlePointerMove)
      pointerSurface.removeEventListener('pointerleave', handlePointerLeave)
      themeObserver.disconnect()
      resizeObserver.disconnect()
      visibilityObserver.disconnect()
    }
  }, [])

  return (
    <div className="antigravity-particles-container" ref={containerRef} aria-hidden="true">
      <canvas ref={canvasRef} className="antigravity-canvas" />
    </div>
  )
}

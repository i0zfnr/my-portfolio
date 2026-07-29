import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { CursorGlow } from './components/CursorGlow'
import { AnimatedBackground } from './components/AnimatedBackground'

export default function App() {
  return <><AnimatedBackground /><CursorGlow /><Navbar /><main><Hero /><Projects /><Experience /><Skills /><Contact /></main></>
}

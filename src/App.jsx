import { useState, useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './components/HomePage.jsx'
import AboutPage from './components/AboutPage.jsx'
import ProjectsPage from './components/ProjectsPage.jsx'

export default function App() {
  const [page, setPage] = useState('Home')

  // 시스템 다크모드 초기 적용
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const current = document.documentElement.getAttribute('data-theme')
    if (!current) {
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light')
    }
  }, [])

  const renderPage = () => {
    switch (page) {
      case 'Home':     return <HomePage setPage={setPage} />
      case 'About':    return <AboutPage />
      case 'Projects': return <ProjectsPage />
      default:         return <HomePage setPage={setPage} />
    }
  }

  return (
    <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      <a href="#main-content" className="sr-only">본문 바로가기</a>
      <Nav page={page} setPage={setPage} />
      {renderPage()}
      <Footer />
    </div>
  )
}

import { useState, useEffect } from 'react'
import { PROFILE } from '../data/index.js'
import Logo from './Logo.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import './Nav.css'

const LINKS = [
  { label: 'Home',    page: 'Home' },
  { label: 'About',   page: 'About' },
  { label: 'Project', page: 'Projects' },
]

export default function Nav({ page, setPage }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navigate = (p) => {
    setPage(p)
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // 페이지 전환 시 모바일 메뉴 닫기
  useEffect(() => { setMobileOpen(false) }, [page])

  return (
    <>
      <nav className="nav" role="navigation" aria-label="메인 내비게이션">
        <div className="nav__inner">
          {/* Logo */}
          <a
            className="nav__logo"
            href="#"
            onClick={(e) => { e.preventDefault(); navigate('Home') }}
            aria-label="홈으로 이동"
          >
            <span className="nav__logo-mark"><Logo /></span>
            <span className="nav__logo-name">{PROFILE.name}</span>
          </a>

          {/* Desktop links */}
          <ul className="nav__links" role="list">
            {LINKS.map(({ label, page: p }) => (
              <li key={p}>
                <a
                  className={`nav__link${page === p ? ' nav__link--active' : ''}`}
                  href="#"
                  onClick={(e) => { e.preventDefault(); navigate(p) }}
                  aria-current={page === p ? 'page' : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="nav__actions">
            <ThemeToggle />
            <button
              className="nav__menu-btn"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="메뉴 열기"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div className={`nav__mobile${mobileOpen ? ' open' : ''}`} role="menu">
        {LINKS.map(({ label, page: p }) => (
          <a
            key={p}
            className={`nav__mobile-link${page === p ? ' nav__mobile-link--active' : ''}`}
            href="#"
            role="menuitem"
            onClick={(e) => { e.preventDefault(); navigate(p) }}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  )
}

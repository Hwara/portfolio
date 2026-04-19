import { useState } from 'react'
import { PROJECTS } from '../data/index.js'
import ProjectCard from './ProjectCard.jsx'
import './ProjectsPage.css'

const ALL_CATEGORIES = ['All', ...new Set(PROJECTS.map((p) => p.category))]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter)

  return (
    <main className="page" id="main-content">
      <div className="container">
        {/* Hero */}
        <section className="projects__hero" aria-labelledby="projects-title">
          <h1 id="projects-title" className="projects__hero-title fade-in fade-in-1">Projects</h1>
          <p className="projects__hero-desc fade-in fade-in-2">
            지금까지 진행한 주요 프로젝트들을 소개합니다.
          </p>
        </section>

        {/* Filters */}
        <div className="projects__filters" role="group" aria-label="카테고리 필터">
          {ALL_CATEGORIES.map((c) => (
            <button
              key={c}
              className={`filter-btn${activeFilter === c ? ' filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(c)}
              aria-pressed={activeFilter === c}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </main>
  )
}

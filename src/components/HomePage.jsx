import { PROFILE, PROJECTS } from '../data/index.js'
import ProjectCard from './ProjectCard.jsx'
import './HomePage.css'

export default function HomePage({ setPage }) {
  const navigate = (p) => {
    setPage(p)
    window.scrollTo({ top: 0 })
  }

  return (
    <main className="page" id="main-content">
      {/* Hero */}
      <section className="home__hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="home__hero-content">
            <span className="home__hero-eyebrow fade-in fade-in-1">{PROFILE.role}</span>
            <h1 id="hero-title" className="home__hero-title fade-in fade-in-2">
              안녕하세요,<br />
              <em>{PROFILE.name}</em>입니다.
            </h1>
            <p className="home__hero-desc fade-in fade-in-3">{PROFILE.bio}</p>
            <div className="home__hero-cta fade-in fade-in-4">
              <button className="btn btn--primary" onClick={() => navigate('Projects')}>
                프로젝트 보기 <span aria-hidden="true">→</span>
              </button>
              <button className="btn btn--ghost" onClick={() => navigate('About')}>
                소개 보기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="home__stats" aria-label="통계">
        <div className="container">
          <div className="home__stats-grid">
            {PROFILE.stats.map((s, i) => (
              <div key={i} className={`home__stat-item fade-in fade-in-${i + 1}`}>
                <span className="home__stat-num">{s.num}</span>
                <span className="home__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Projects */}
      <section className="home__latest" aria-labelledby="latest-title">
        <div className="container">
          <div className="section__header">
            <h2 id="latest-title" className="section__title">최근 프로젝트</h2>
            <button className="section__link" onClick={() => navigate('Projects')}>
              전체 보기 <span aria-hidden="true">→</span>
            </button>
          </div>
          <div className="home__projects-grid">
            {PROJECTS.slice(0, 3).map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

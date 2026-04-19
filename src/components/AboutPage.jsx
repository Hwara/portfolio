import { PROFILE, EXPERIENCES, CERTIFICATE } from '../data/index.js'
import './AboutPage.css'

export default function AboutPage() {
  return (
    <main className="page" id="main-content">
      <div className="container">
        {/* Hero */}
        <section className="about__hero" aria-labelledby="about-title">
          <h1 id="about-title" className="about__hero-title fade-in fade-in-1">About Me</h1>
          <p className="about__hero-lead fade-in fade-in-2">{PROFILE.bio}</p>
        </section>

        {/* Body */}
        <section className="about__body" aria-label="소개 상세">
          <div className="about__body-text fade-in fade-in-1">
            {PROFILE.about.map((t, i) => <p key={i}>{t}</p>)}
            <h3>기술 스택</h3>
            <div className="about__skills">
              {PROFILE.skills.map((s) => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>

          <aside className="about__sidebar fade-in fade-in-2" aria-label="연락처 및 정보">
            <div className="about__info-block">
              <h4>연락처</h4>
              <ul className="about__info-list" role="list">
                <li>
                  <span>이메일</span>
                  <a href={`mailto:${PROFILE.contact.email}`} className="about__info-link">
                    {PROFILE.contact.email}
                  </a>
                </li>
                <li>
                  <span>위치</span>
                  <span className="about__info-value">{PROFILE.contact.location}</span>
                </li>
              </ul>
            </div>

            <div className="about__info-block">
              <h4>소셜</h4>
              <ul className="about__info-list" role="list">
                {PROFILE.social.map((s) => (
                  <li key={s.label}>
                    <span>{s.label}</span>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="about__info-link">
                      바로가기 →
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        {/* Experience */}
        <section className="about__experience" aria-labelledby="exp-title">
          <div className="section__header" style={{ marginBottom: 0 }}>
            <h2 id="exp-title" className="section__title">경력</h2>
          </div>
          <div className="experience__list" role="list">
            {EXPERIENCES.map((e, i) => (
              <article key={i} className={`experience__item fade-in fade-in-${(i % 3) + 1}`} role="listitem">
                <div className="experience__meta">
                  <span className="experience__period">{e.period}</span>
                  <span className="experience__company">{e.company}</span>
                </div>
                <div className="experience__content">
                  <h3>{e.role}</h3>
                  <p>{e.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Certificate */}
        <section className="about__certificate" aria-labelledby="cert-title">
          <div className="section__header" style={{ marginBottom: 0 }}>
            <h2 id="exp-title" className="section__title">자격증 및 수상</h2>
          </div>
          <div className="certificate__list" role="list">
            {CERTIFICATE.map((e, i) => (
              <article key={i} className={`certificate__item fade-in fade-in-${(i % 3) + 1}`} role="listitem">
                <div className="certificate__meta">
                  <span className="certificate__date">{e.date}</span>
                  <span className="certificate__organization">{e.organization}</span>
                </div>
                <div className="certificate__content">
                  <h3>{e.name}</h3>
                  <p>{e.state}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

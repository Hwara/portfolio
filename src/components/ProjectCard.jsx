import './ProjectCard.css'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card" tabIndex="0" role="article" aria-label={project.title}>
      <div className="project-card__thumb">
        <div className="project-card__thumb-inner" aria-hidden="true">
          {project.emoji}
        </div>
      </div>
      <div className="project-card__body">
        <div className="project-card__tags">
          {project.tags.map((t) => (
            <span key={t} className="project-card__tag">{t}</span>
          ))}
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.desc}</p>
        <div className="project-card__footer">
          <span className="project-card__year">{project.year}</span>
          {/* <span className="project-card__arrow" aria-hidden="true">→</span> */}
        </div>
      </div>
    </article>
  )
}

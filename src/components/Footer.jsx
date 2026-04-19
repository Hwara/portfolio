import { PROFILE } from '../data/index.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <p className="footer__copy">© 2026 {PROFILE.name}. All rights reserved.</p>
          <ul className="footer__links" role="list">
            {PROFILE.social.map((s) => (
              <li key={s.label}>
                <a className="footer__link" href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

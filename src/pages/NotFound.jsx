import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="empty">
      <h1>Página não encontrada 🐾</h1>
      <Link to="/">Voltar ao início</Link>
    </section>
  )
}

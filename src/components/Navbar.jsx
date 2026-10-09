import { NavLink } from 'react-router-dom'
import { useFavorites } from '../hooks/useFavorites.jsx'

export default function Navbar() {
  const { favorites } = useFavorites()
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="brand">🐾 Patinhas</NavLink>
        <nav>
          <NavLink to="/" end>Animais</NavLink>
          <NavLink to="/favoritos">Favoritos {favorites.length > 0 && <span className="badge">{favorites.length}</span>}</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </nav>
      </div>
    </header>
  )
}

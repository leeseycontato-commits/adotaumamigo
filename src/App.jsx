import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import AnimalDetail from './pages/AnimalDetail.jsx'
import Favorites from './pages/Favorites.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'
import { FavoritesProvider } from './hooks/useFavorites.jsx'

export default function App() {
  return (
    <FavoritesProvider>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animal/:id" element={<AnimalDetail />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/sobre" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">🐾 Patinhas — cada animal merece um lar.</footer>
    </FavoritesProvider>
  )
}

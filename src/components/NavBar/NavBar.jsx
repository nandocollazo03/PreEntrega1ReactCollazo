import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <h1>Naturalia</h1>

      <nav>
        <ul>
          <li>Inicio</li>
          <li>Tienda</li>
          <li>Blog</li>
          <li>Sobre nosotros</li>
          <li>Contacto</li>
          <li>Preguntas frecuentes</li>
          <li>Políticas</li>
          <li>Registro</li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar
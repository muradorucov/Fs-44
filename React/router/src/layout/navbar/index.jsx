import { Link } from "react-router"

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/blogs">Blogs</Link>
    </nav>
  )
}

export default Navbar
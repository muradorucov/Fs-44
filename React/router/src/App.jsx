import { Route, Routes } from "react-router"
import Blogs from "./pages/blogs"
import Contact from "./pages/contact"
import Home from "./pages/home"
import SingleBlog from "./pages/singleblog"
import Navbar from "./layout/navbar"
import Footer from "./layout/footer"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import { Link } from "react-router"

function BlogCard({ id, title, body }) {
  return (
    <div>
      <Link to={`/blogs/${id}`}>
        <h2>{title}</h2>
        <p>{body.slice(0, 55)}...</p>
      </Link>
    </div>
  )
}

export default BlogCard
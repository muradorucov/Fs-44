import { useEffect, useState } from "react"
import BlogCard from "../../components/blogCard"

function Blogs() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data.posts))
  }, [])
  return (
    <div className="grid grid-cols-3 gap-7.5">
      {
        posts.map(post => <BlogCard key={post.id} {...post} />)
      }
    </div>
  )
}

export default Blogs
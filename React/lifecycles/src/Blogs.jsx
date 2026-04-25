import React, { useEffect, useState } from 'react'

function Blogs() {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          setBlogs(data.posts);
          console.log("Render");
        }, 3000)
      })
  }, [])


  return (
    <div>
      Blogs
      <ul>
        {
          blogs ? blogs.map(blog => <li key={blog.id}>{blog.title}</li>) : <p>loading....</p>
        }
      </ul>
    </div>
  )
}

export default Blogs
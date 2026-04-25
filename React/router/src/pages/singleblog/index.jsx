import { useEffect, useState } from "react"
import { useParams } from "react-router"

function SingleBlog() {
  const { id } = useParams();
  const [post, setPost] = useState({})
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data)
        setLoader(false)
      })
  }, [])

  if (loader) {
    return <p>Loading....</p>
  }


  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <ul>
        {post.tags?.map(tag => <li key={tag}>{tag}</li>)}
      </ul>
      <p>Like {post.reactions?.likes}</p>
      <p>DisLike {post.reactions?.dislikes}</p>
      <p>Views : {post.views}</p>
    </div>
  )
}

export default SingleBlog
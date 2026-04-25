import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToListAction, removeFromListAction } from '../../features/favlist.slice';

function Posts() {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const { value } = useSelector(state => state.favlist)

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data.posts))
  }, [])


  const addToFav = (payload) => {
    dispatch(addToListAction(payload))
  }
  const removeFromFav = (payload) => {
    dispatch(removeFromListAction(payload))
  }
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {
          posts.map(post => {

            const foundPost = value.find(x => x.id === post.id)

            return <div
              key={post.id}
              className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300 flex flex-col justify-between">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {post.body.slice(0, 100)}...
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {
                  post.tags?.map(tag => <span
                    key={tag}
                    className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                    #{tag}
                  </span>
                  )
                }
              </div>
              <div className="flex justify-between items-center">
                <div className="text-xs text-gray-500">👍 {post.reactions.likes} | 👎 {post.reactions.dislikes}</div>
                {
                  foundPost ?
                    <button className="px-3 py-1 text-sm rounded-full bg-red-500 text-white"
                      onClick={() => removeFromFav(post.id)}>
                      Remove
                    </button>
                    : <button className="px-3 py-1 text-sm rounded-full bg-gray-200 hover:bg-gray-300 transition"
                      onClick={() => addToFav(post)}
                    >
                      Add Fav
                    </button>
                }
              </div>
            </div>
          })
        }
      </div>
    </div>

  )
}

export default Posts
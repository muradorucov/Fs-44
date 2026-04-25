import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromListAction } from "../../features/favlist.slice";

function Favorite() {
  const { value } = useSelector(state => state.favlist);
  const dispatch = useDispatch();
  const removeFromFav = (payload) => {
    dispatch(removeFromListAction(payload))
  }
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Favorite Posts
          </h1>

          {
            value.length ? <span className="text-sm text-gray-500">
              {value.length} items
            </span> : null
          }
        </div>

        {/* Empty State (optional - comment et istifadə et) */}

        {
          value.length ? <div className="grid md:grid-cols-2 gap-6">
            {
              value.map(post => <div
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
                  <button className="px-3 py-1 text-sm rounded-full bg-red-500 text-white"
                    onClick={() => removeFromFav(post.id)}>
                    Remove
                  </button>
                </div>
              </div>)
            }

          </div>
            : <div className="bg-white rounded-2xl shadow-md p-10 text-center">
              <h2 className="text-lg font-medium text-gray-700 mb-2">
                No favorites yet
              </h2>
              <p className="text-sm text-gray-500">
                Start adding posts to your favorites.
              </p>
            </div>
        }

        {/* Grid */}



      </div>
    </div>
  );
}

export default Favorite;
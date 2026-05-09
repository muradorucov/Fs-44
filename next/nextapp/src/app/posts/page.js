"use client"

import { getAllPostsService } from "@/api"
import Card from "@/components/Card";
import { useEffect, useState } from "react";

// import { getAllPostsService } from "@/api";
// import { useEffect, useState } from "react"

// function Posts() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     getAllPostsService()
//       .then(posts => setData(posts.posts))
//   }, [])
//   return (
//     <div>

//       <ul>
//         {
//           data.map(post => <li>{post.title}</li>)
//         }
//       </ul>
//     </div>
//   )
// }

// export default Posts



async function Posts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllPostsService()
      .then(x => setData(x.posts))
  }, [])
  return (
    <div>
      <ul>
        {
          data.posts?.map(post => <Card {...post} key={post.id} />)
        }
      </ul>
    </div>
  )
}
export default Posts

// compo => SSR
// inner comp => CSR

// SSR => CSR +
// CSR => SST -
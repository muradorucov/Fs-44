
function Card({ title }) {
  let isFav = false;
  return (
    <li>
      <span>{title}</span>
      {
        isFav ? <button onClick={() => isFav = false} className="bg-black p-7.5 text-white mx-10">remove fav</button> :
          <button onClick={() => isFav = true} className="bg-black p-7.5 text-white mx-10">add to fav</button>
      }
    </li>
  )
}

export default Card
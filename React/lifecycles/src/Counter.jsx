import { useEffect, useState } from "react"

function Component() {
  const [cnt, setCnt] = useState(0);
  const [list, setList] = useState([]);


  useEffect(() => {
    console.log("All time Render");
  });

  useEffect(() => {
    console.log("Mounting Render");

    return () => {
      console.log("UnMounting Render");
    }
  }, []);

  useEffect(() => {
    console.log("Cnt render");
  }, [cnt])

  useEffect(() => {
    console.log("List render");
  }, [list])

  useEffect(() => {
    console.log("List render");
  }, [cnt, list])


  return (
    <div>App

      <button onClick={() => setCnt(cnt - 1)}>-</button>
      <button onClick={() => setList([...list, cnt])}>{cnt}</button>
      <button onClick={() => setCnt(cnt + 1)}>+</button>

      <ul>
        {
          list.map((item, i) => <li key={i}>{item}</li>)
        }
      </ul>
    </div>
  )
}

export default Component



// component base
// props
// state managment (useState)
// life cycles (useEffetc)

// mounting
// updating
// unmounting
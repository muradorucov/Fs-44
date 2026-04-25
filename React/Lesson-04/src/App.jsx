// import Counter from "./components/Counter"
import { useState } from "react"
import Form from "./components/Form"
// import Game from "./components/Game"
// import Slider from "./components/Slider"
import Table from "./components/Table"

function App() {
  const [users, setUsers] = useState([]);
  console.log("Render App");

  return (
    <div>
      <Form
        users={users}
        setUsers={setUsers}
      />
      <Table
        users={users}
        setUsers={setUsers}
      />
    </div>
  )
}

export default App
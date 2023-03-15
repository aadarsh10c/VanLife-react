import { useState } from 'react'
import Front from './Front'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Front />
    </div>
  )
}

export default App

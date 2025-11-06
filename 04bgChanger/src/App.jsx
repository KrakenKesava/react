import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");
  return (
    
      <div className="w-full h-screen duration-200" style={{backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor("red")} className="outline-non px-4 rounded-3xl" style={{backgroundColor: "red"}}>Red</button>
            <button onClick={() => setColor("blue")} className="outline-non px-4 rounded-3xl" style={{backgroundColor: "blue"}}>Blue</button>
            <button onClick={() => setColor("green")} className="outline-non px-4 rounded-3xl" style={{backgroundColor: "green"}}>Green</button>
            <button onClick={() => setColor("olive")} className="outline-non px-4 rounded-3xl" style={{backgroundColor: "olive"}}>Olive</button>
            <button onClick={() => setColor("purple")} className="outline-non px-4 rounded-3xl" style={{backgroundColor: "purple"}}>Purple</button>
            
          </div>
        </div>
      </div>
    
  )
}

export default App

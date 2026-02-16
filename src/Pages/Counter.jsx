import { useState } from 'react'
import { Plus, Minus, RotateCcw } from 'lucide-react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Counter Component
        </h1>
        <p className="text-gray-600">
          A simple counter with increment, decrement, and reset functionality.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-xl hover-lift text-center space-y-6 max-w-md mx-auto">
        <div className="space-y-4">
          <div className="text-6xl font-bold text-gray-800 transition-all duration-300">
            {count}
          </div>
          <div className="text-sm text-gray-500 uppercase tracking-wide">
            Current Count
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
          >
            <Minus size={24} />
          </button>

          <button
            onClick={() => setCount(0)}
            className="bg-linear-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
          >
            <RotateCcw size={24} />
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
          >
            <Plus size={24} />
          </button>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            Click the buttons to change the counter value
          </p>
        </div>
      </div>
    </div>
  )
}

export default Counter


// import {useState} from 'react'

// const Counter = () => {
  
  // const [count setCount] = useState(0)

  // return(
  // <div> 
   
  // <button onclick = {()=> setCount(count+1)} > Increase</button>

  // <button onclick = {()=> setCount(count-1)}>decrease</button>

  // </div>)
  //  }



  // const input = () => {
    
  //   const [input, setInput] = useState("") 

  //   return(
  //     <div>
  //        <input type="text" onChange={()=> setInput(e.target.value)}/>

  //        <p>{input}</p>
  //     </div>
  //   )
  // }

import React from 'react'
import {useState} from 'react'
import './app.css'

const App =() =>{
    let [score, setScore] = useState(0)

    return(
        <div>
            <h1>hello This is my counter  application</h1>
            <h3>my score is {score}</h3>

            <button className="button1" onClick={()=>(score<25)?setScore(score+1):""}>Increment +</button>
            <button className="button2" onClick={()=>(score>0)?setScore(score-1):"" }> Decrement -</button>
            <button  className="button3" onClick={()=>{setScore(0)}}> Reset </button>
        </div>
    )
}
export default App
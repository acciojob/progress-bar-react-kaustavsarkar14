
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
     const timer = setInterval(() => {
      setProgress(progress=>{
        if(progress>=100){
          clearInterval(timer)
        }
        else {
          setProgress(progress+1)
        }
      })
    }, 100);
  }, [])



  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Progress Bar</h1>
      <div id="barOuter">
        <div id="barInner" style={{width:`${progress}%`}}></div>
      </div>
      <p>{progress}%</p>
    </div>
  )
}

export default App

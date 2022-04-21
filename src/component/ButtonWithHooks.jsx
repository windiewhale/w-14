import React, { useState } from 'react' //!important, must be imported here for further use
import './button.css'

function ButtonWithHooks() {
  const [key1, setKey1] = useState("this is the default state of a function component")
  const [key2, setKey2] = useState(0)
    return (
    <div>
        <p>{key1}</p>
        <button onClick={() => setKey1("this is an updated state of the function component")}>click me</button>
        <button onClick={() => setKey2(1)}>{key2}</button>
    </div>
  )
}

export default ButtonWithHooks
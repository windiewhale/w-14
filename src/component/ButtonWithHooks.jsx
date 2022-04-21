import React, { useEffect, useState } from 'react' //!important, must be imported here for further use
import './button.css'

function ButtonWithHooks() {
  const [key1, setKey1] = useState("this is the default state of a function component")
  const [key2, setKey2] = useState(0)
  const [countries, setCountries] = useState([])

  
  
  useEffect(
    () => {
      console.log("render");
        fetch('https://restcountries.com/v3.1/all')
          .then((res) => res.json())
          .then(countriesData => setCountries(countriesData))
    },
    []
  )

    return (
    <div>
        <p>{key1}</p>
        <button onClick={() => setKey1("this is an updated state of the function component")}>click me</button>
        <button onClick={() => setKey2(1)}>{key2}</button>

        <div className='countries'>
          {countries.map((country, i) => <div key={i}>{country.name.common}</div> )}
        </div>
    </div>
  )
}

export default ButtonWithHooks
import React from 'react'

function Header({to}) {
  /* const toHeader = 'This is the end of the header' */
  
    /* return (
    <div>Header {to}</div>
    ) */

    return React.createElement("div", null, `header ${to}`)
}

export default Header
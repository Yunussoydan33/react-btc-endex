import React from 'react'

const Header = props => (
  <header style={{marginBottom: 10}}>
    <div>
      <span className="header"> {props.title} </span>
    </div>

    <div className="subheader-body">
      <span className="subheader"> Tarafından desteklenmektedir <a className="link" target="_blank" href="coindesk.com">https://www.coindesk.com/</a>. </span>
    </div>
  </header>
)

export default Header

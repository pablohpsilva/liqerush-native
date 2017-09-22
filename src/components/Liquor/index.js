import React from 'react'

const Liquor = ({ name, img, value, id }) => (
  <div
    key={id}
    style={{minWidth: '200px', minHeight: '120px'}}
    className="liquor-container">
    liq
    <p
      className="liquor-name">
      {name || 'nome'}
    </p>
    <img
      className="liquor-image"
      alt="some bitch ass"
      src={img}/>
    <p
      className="liquor-value">
      {value || 12}
    </p>
  </div>
)


export default Liquor

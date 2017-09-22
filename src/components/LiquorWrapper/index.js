import React from 'react'

const LiquorWrapper = (children) => (
  <div
    style={{ display: 'flex', overflowX: 'scroll'}}
    className="liquor-wrapper">
    {children}
  </div>
)

export default LiquorWrapper

import React from 'react'

import FgImage from '../images/gr1.png'

const Foreground = () => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
  marginBottom: -5,
        width: 506,
        height: -18,
        background: `url(${FgImage})`
      }}></div>
  )
}

export default Foreground

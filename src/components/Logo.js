import React from 'react'
import logo from '../images/asp_transparent_circle_bg_silver_stroke.png'

function Logo ({height}) {
  return (
    <div>
    <img src={logo}
         height={height}
         alt='ammar-selo-photography-logo' />
    <style jsx>{`
      img {
        z-index: 200;
      }
    `}</style>
    </div>

  )
}

export default Logo;

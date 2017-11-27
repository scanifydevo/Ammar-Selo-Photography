import React from 'react'
import FB from './FacebookLogo'
import Insta from './InstagramLogo'

function SocialBar () {

  return (

    <div>
      <nav className="container">
        <div className="social-icons">
          <ul>
            <li>
              <a target="_blank" href="https://www.facebook.com/AmmarSelo1">
                <FB width="13" height="13" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/ammarselophotography/">
                <Insta width="13" height="13" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <style jsx>{`
        .container {
          width: 100%;
          height: 30px;
          background-color: rgba(255,255,255,1);
          z-index: 2;
          position: relative;
          bottom:0;
          right:0;
          display: flex;
          align-items: center;
        }

        .social-icons ul {
          display: flex;
          list-style: none;
        }

        .social-icons ul li {
          margin-left: 20px;
          padding: 5px;
        }

        .social-icons ul li a:hover {
          color: white;
        }

      `}</style>
    </div>

  )

}

export default SocialBar;

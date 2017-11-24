import React from 'react'
import FB from './FacebookLogo'
import Insta from './InstagramLogo'

function Footer () {

  return (

    <div>
      <footer className="credits">
        <div className="social-icons">
          <ul>
            <li>
              <a href="https://www.facebook.com/AmmarSelo1">
                <FB width="20" height="20" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ammarselophotography/">
                <Insta width="20" height="20" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <style jsx>{`
        .credits {
          font-size: 1em;
          color: black;
          width: 100%;
          height: 50px;
          background-color: rgba(0,0,0,0.3);
          z-index: 200;
          position: fixed;
          bottom:0;
          left:0;
          display: flex;
          align-items: center;
        }

        .social-icons ul {
          display: flex;
          list-style: none;
        }

        .social-icons ul li {
          margin-right: 20px;
          padding: 5px;
        }

        .social-icons ul li a:hover {
          color: white;
        }

      `}</style>
    </div>

  )

}

export default Footer;

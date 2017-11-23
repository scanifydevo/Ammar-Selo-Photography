import React, {Component} from 'react'

class About extends Component {

  constructor() {
    super();
    this.state = {
      backgroundImage: '',
      proPic: ''
    }
  }

  componentDidMount() {

  }

  render () {
    return (
      <div className="container">
        <div className="bio-blurb">
          <img width={150} src='http://198.58.109.189/wp-content/uploads/2017/11/pro-pic.522969d7.jpg' />
          <p>My name is Ammar Selo.
            I have a mechanical engineering degree and have spent
          10 years in the Oil & Gas industry. I discovered my passion for photography
          a few years back so I left the corporate life to pursue my passion full time.
          My training as an engineer has helped me bring methodical discipline to the art of photography.
          I am happily married with three beautiful children. In addition to photography, I provide album design
          and print services along with other high quality printing options such as Canvas, Aluminum, and framed photo prints.
          For all inquiries, please shoot me a message or call me at my cell and I will return back to you within 24hrs.
          </p>
          <div className="cta-grid">
            <a href="tel:8324624437">Call</a>
            <a href="mailto:info@ammarselophotography.com">Email</a>
          </div>
        </div>
        <style jsx>{`
        	.container {
        	  margin-top: 0px;
        	  height: 100vh;
            background-image: url("http://198.58.109.189/wp-content/uploads/2017/11/happy-family-2.f21bfdd2.jpg");
        	  background-size: cover;
        	  display: flex;
        	  align-items: center;
        	  justify-content: center;
        	}
        	.bio-blurb {
        	  max-width: 70%;
        	  color: white;
        	  padding: 50px;
        	  border-radius: 5px;
        	  background-color: rgba(0,0,0,0.7);
        	}
          .bio-blurb img {
            border: 2px solid white;
            border-radius: 3px;
          }

          .cta-grid {
            padding-top: 20px;
            padding-bottom: 20px;
            width: 50%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 1em;
          }
          .cta-grid a {
            border: 1px solid white;
            padding: 10px;
            color: white;
            text-decoration: none;
            text-transform: uppercase;
            text-align: center;
          }
          .cta-grid a:hover {
            color: black;
            background-color: white;
          }
        	p {
        	 font: 'Montserrat Light', Montserrat;
        	 font-weight: 100;
        	 line-height: 2em;
        	}

          @media (max-width: 400px) {

            .container {
              background-position: 45%;
            }

            .bio-blurb {
              margin-top: 400px;
            }

          }
      `}</style>
    </div>
    )
  }
}

export default About

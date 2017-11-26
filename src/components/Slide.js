import React from 'react'

function Slide ({background, current}) {
  return (
    <div>
      <div className="slide"></div>
      <style jsx>{`
        .slide {
          height: 100vh;
          background-image: url('${background[current].imageUrl}');
          background-size: cover;
          background-position: center;
          animation: kenburns 20s infinite;
          z-index: 1;
        }

        @keyframes kenburns {
          0% {
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            transform: scale3d(1.5,1.5,1.5);
            animation-timing-function: ease-in;
            opacity: 1;
          }
          100%{
            transform: scale3d(2,2,2);
            opacity: 0;
          }
        }

      `}</style>
    </div>
  )
}

export default Slide

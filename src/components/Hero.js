import React from "react";
import video from './assets/villa.mp4';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Hero = () => {
  const background = {
    maxWidth: '100%', // Set the height of the container to the full height of the viewport
    overflow: 'hidden', // Ensure video does not overflow the container
  };
    
  const videoStyle = {
    width: '100%',
    height: 'auto', // Set the height to auto
    position: 'absolute',
    top: '50%', // Center the video vertically
    left: '50%', // Center the video horizontally
    transform: 'translate(-50%, -50%)', // Center the video both vertically and horizontally
    zIndex: -1,
  };

  const contentStyle = {
    position: 'relative',
    textAlign: 'center',
    color: '#fff',
    zIndex: 1,
    paddingTop: '20%',
    marginBottom: '5vw'
  };

  const h1Style = {
    fontSize: '10vw',
    fontFamily: 'higuen elegant serif',
    color: '#ffafda'
  }

  const pStyle = {
    textTransform: 'uppercase',
    fontSize: '2vw',
    fontFamily: 'Nato Sans, sans-serif',
    fontWeight: 100,
    letterSpacing: '1vw'
  };
  const pStyle2 = {
    textTransform: 'uppercase',
    fontSize: '2vw',
    fontFamily: 'Cormorant Garamond',
    fontWeight: 100,
    letterSpacing: '1vw',
    marginBottom: '10px'
  };
    
  return (
    <div className="fluid-container" style={background} >
      <div style={{ position: 'relative' }}>
        <video autoPlay muted loop style={videoStyle}>
          <source src={video} type="video/mp4" />
        </video>
        <div style={contentStyle}>
          <p style={pStyle}>Welcome</p>
          <h1 style={h1Style}>The Wellhall.</h1>
          <p style={pStyle2}>Resort & Spa Hotel</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

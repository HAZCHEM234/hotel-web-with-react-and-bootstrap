import React from "react";
import Deluxe from './assets/de luxe hotel room.jpg'
import BeachView from './assets/beach view hotel room.jpg'
import FamilyHotel from './assets/family hote room.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

const Accommodations = () => {
    const background = {
        maxWidth: '100%',
        height: '45vw',
        backgroundColor: '#ffafda',
        margin: 0,
        padding: 0,
    }
    
    const imgStyle = {
        width: '95%',
        height: 'auto'
    }
    const h1Style = {
        fontSize: '4vw',
        fontFamily: 'higuen elegant serif',
        color:'black',
        marginTop: '5vw'
      }
      const pStyle = {
        marginTop:'0.8vw',
        textTransform: 'uppercase',
        fontSize: '1.2vw',
        fontFamily: 'Nato Sans, sans-serif',
        fontWeight: 100,
        letterSpacing: '0.6vw'
      };
  
      const pStyle2 = {
          fontSize: '1.2vw',
          fontFamily: 'Cormorant Garamond',
          fontWeight: 100,
          color: 'black'
      };

      const h5Style = {
        fontSize: '2vw',
        fontFamily: 'Cormorant Garamond',
        fontWeight: 100,
        color: 'black'
    };


    return (
        <div className="container" style={background}>
                <div className="row">
                <div>
                    <h1 style={h1Style}>Accommodations</h1>
                </div>
                    <div className="col-md-4">
                        <img src={Deluxe} style={imgStyle} />
                        <p style={pStyle}>2 adults | 1 child below 7</p>
                        <h5 style={h5Style}>De Luxe Room</h5>
                        <h6 style={pStyle2}>from $189 a night</h6>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={BeachView} style={imgStyle} />
                        <p style={pStyle}>2 adults | 1 child below 7</p>
                        <h5 style={h5Style}>De Luxe Sea View</h5>
                        <h6 style={pStyle2}>from $209 a night</h6>
                    </div>
                    <div className="col-md-4 text-right">
                        <img src={FamilyHotel} style={imgStyle} />
                        <p style={pStyle}>4 adults | 2 children below 7</p>
                        <h5 style={h5Style}>The Wellhall Family Suite</h5>
                        <h6 style={pStyle2}>from $399 a night</h6>
                    </div>
                </div>
            </div>
    )
}

export default Accommodations;

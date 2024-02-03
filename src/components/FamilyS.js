import React from "react";
import Suites from './assets/family suite room.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const FamilyS = () => {
    const imgStyle = {
        width: '80%',
        height: 'auto',
        marginTop: '5vw'
    };

    const background = {
        maxWidth: '100%',
        height: '45vw',
        backgroundColor: '#efede7',
        margin: 0,
        padding: 0,
    }

    const h1Style = {
        fontSize: '4.5vw',
        fontFamily: 'higuen elegant serif',
        color:'#00634d',
        marginTop: '6vw'
      }
      const pStyle = {
        fontSize: '1.3vw',
        fontFamily: 'Cormorant Garamond',
        fontWeight: 100,
        color: '#032b22'
      };

      const left = {
        width:'40%',
        textAlign: 'left',
        marginLeft: '5vw',

      }

      const pStyle2 = {
        fontSize: '1.3vw',
        fontFamily: 'Cormorant Garamond',
        fontWeight: 100,
        marginTop: '0.8vw',
        color: '#032b22'
      };

      

    return (
        <div className="container" style={background}>
            <div className="row">
                <div className="col-md-6" style={left}>
                    <h1 style={h1Style}>The Family Suite</h1>
                    <p style={pStyle}>Showcase the best your property has to offer by highlighting one of your accommodations. Add a flattering photo, then describe the room's best feature.</p>
                </div>
                <div className="col-md-6">
                    <img src={Suites} style={imgStyle} className="img-fluid" alt="Family Suite" />
                    <h6 style={pStyle2}>An intriguing caption that describes the room goes here. Use a flattering photo, then describe away!</h6>
                </div>
            </div>
        </div>
    );
};

export default FamilyS;

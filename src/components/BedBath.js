import React from "react";
import Bed from './assets/bed zoom.jpg';
import Bath from './assets/hotel bathroom.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const BedBath = () => {
    const imgStyle = {
        width: '80%',
        height: 'auto'
    };

    const lefty = {
        width: '35%',
        height: 'auto',
        marginLeft: '5vw',
        textAlign: 'center', // Center the text
    };

    const background = {
        maxWidth: '100%',
        height: '55vw',
        backgroundColor: '#efede7',
        margin: 0,
        padding: 0,
    };

    const pStyle = {
        fontSize: '1.3vw',
        fontFamily: 'Cormorant Garamond',
        fontWeight: 100,
        maxWidth: '80%', // Reduce width
        margin: 'auto', // Center the paragraph
        color: '#032b22'
    };

    const righty = {
        marginLeft: '6vw',
        marginTop: '20vw',
        textAlign: 'center', // Center the text
    };

    return (
        <div className="container" style={background}>
            <div className="row">
                <div className="col-md-6" style={lefty}>
                    <img src={Bed} style={imgStyle} className="img-fluid" alt="Bedroom" />
                    <p style={pStyle}>An intriguing caption that describes the room goes here. Use a flattering photo, then describe away!</p>
                </div>
                <div className="col-md-6" style={righty}>
                    <img src={Bath} style={imgStyle} className="img-fluid" alt="Bathroom" />
                    <p style={pStyle}>An intriguing caption that describes the room goes here. Use a flattering photo, then describe away!</p>
                </div>
            </div>
        </div>
    );
};

export default BedBath;

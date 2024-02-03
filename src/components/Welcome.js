import React from "react";
import HotelPool from './assets/hotel pool.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Welcome = () => {
    
    const background = {
        maxWidth: '100%',
        height: '45vw',
        backgroundColor: '#032b22'
    }

    const imgStyle = {
        width: '80%',
        height: 'auto',
        marginTop: '5vw'
    };

    const textStyle = {
        maxWidth: '80%'
    }

    const h1Style = {
        fontSize: '4vw',
        fontFamily: 'higuen elegant serif',
        marginTop: '4vw',
        color:'#40ffb5',
        maxWidth: '90%', // Adjusted the width
        marginLeft: '5vw'
    }

    const pStyle = {
        fontSize: '1.2vw',
        fontFamily: 'Cormorant Garamond',
        fontWeight: 100,
        color: '#efede7',
        maxWidth: '90%',// Adjusted the width
        marginLeft: '5vw'
    };

    return (
        <div className="container" style={background}>
            <div className="row">
                <div className="col-md-6" style={textStyle}>
                    <h1 style={h1Style}>Welcome to your luxurious home away from home</h1>
                    <p style={pStyle}>
                        Write a paragraph that talks about your brand or property here.
                        Convince your prospective clients to choose you and your offerings
                        by highlighting the qualities that set you apart from the competition.
                        Your audience is already on your website, so push a little bit harder
                        to seal the deal!
                    </p>
                </div>
                <div className="col-md-6">
                    <img src={HotelPool} style={imgStyle} alt="Hotel Pool" />
                </div>
            </div>
        </div>
    );
};

export default Welcome;

import React from "react";
import Social from './assets/social-media.webp'
import 'bootstrap/dist/css/bootstrap.min.css';

const Bottom = () => {

    const imgStyle = {
        width: '50%',
        height: 'auto',
        marginTop: '5vw'
    }

    const h5Style = {
        color: '#ffffff',
        fontFamily: 'Nato Sans, sans-serif',
        fontWeight: 100,
        fontSize: '2vw',
        marginTop: '6vw',
        textTransform: 'uppercase',
        
    }

    const h6Style = {
        color: '#ffffff',
        fontFamily: 'Cormorant Garamond',
        fontSize: '2vw',
        marginTop: '1.8vw',
        textTransform: 'uppercase',
        
        
    }

    const pStyle = {
        color: '#ffffff',
        fontFamily: 'Cormorant Garamond',
        fontSize: '1.7vw',
        
    }

    const background = {
        maxWidth: '100%',
        height: '60vw',
        backgroundColor: '#032b22',
        margin: 0,
        padding: 0,
    }

    const h1Style = {
        marginTop: '10vw',
        color: '#40ffb5',
        fontSize: '15vw',
        fontFamily: 'higuen elegant serif',
        marginBottom: '3vw',

    }




    return (
        <div className="container" style={background}>
            <div className="row">
                <div className="col-md-4">
                    <div className="left">
                        <h5 style={h5Style}>Reservations Office</h5>
                        <p style={pStyle}>123 Anywhere St., Any City ST 12345<br />123-456-7890<br />hello@reallygreatsite.com</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="centre text-center">
                        <h5 style={h5Style}>Office Hours</h5>
                        <h6 style={h6Style}>Monday to Friday</h6>
                        <p style={pStyle}>9:00 am to 6:00 pm</p>
                        <h6 style={h6Style}>Saturday</h6>
                        <p style={pStyle}>9:00 am to 12:00 noon</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="right text-right">
                        <img src={Social} alt="Social Media" style={imgStyle} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <div className="bottom">
                        <h1 style={h1Style}>The Wellhall</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bottom;

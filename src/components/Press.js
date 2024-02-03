import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Press = () => {
    const background = {
        maxWidth: '100%',
        height: '55vw',
        backgroundColor: '#efede7',
        margin: 0,
        padding: 0,
    };

    const contentB = {
        marginTop: '5vw',
        background:'#ffafda',
        border: '2px solid #e5e5e5',
        padding: '20px',
        marginBottom: '20px',
        maxWidth: '28%', // Adjusted the width
        margin: 'auto', // Centered the contentB
        height: '30vw'
    }

    const h6Style = {
        color: 'black',
        fontFamily: 'Cormorant Garamond',
        fontSize: '1.7vw',
        textTransform: 'uppercase', 
    }

    const pStyle = {
        color: 'black',
        fontFamily: 'Cormorant Garamond',
        fontSize: '1.7vw',
        textAlign: 'center', // Center align the paragraph
        marginTop: '2.5vw'
    }

    
    const h1Style = {
        fontSize: '4.5vw',
        fontFamily: 'higuen elegant serif',
        color:'#00634d',
        marginTop: '6vw'
      }

    return (
        <div className="container" style={background}>
            <div className="row">
                <div className="text-center">
                    <h1 className="title" style={h1Style}>In the Press</h1>
                </div>
                <div className="col-md-4" style={contentB}>
                    <p style={pStyle}>"Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."</p>
                    <h6 style={h6Style}>Santa Solana Post</h6>
                </div>
                <div className="col-md-4" style={contentB}>
                    <p style={pStyle}>"Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."</p>
                    <h6 style={h6Style}>Mariana's Luxe Travels</h6>
                </div>
                <div className="col-md-4" style={contentB}>
                    <p style={pStyle}>"Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."</p>
                    <h6 style={h6Style}>Fairhill Journal</h6>
                </div>
            </div>
        </div>
    )
}

export default Press;

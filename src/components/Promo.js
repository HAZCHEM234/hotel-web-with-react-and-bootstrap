import React from "react";
import Discount from './assets/hotel discount.jpg';
import Night from './assets/book 3 nights.jpg';
import Members from './assets/members.jpg';

const Promo = () => {
    const imgStyle = {
        width: 'auto',
        height: '18vw'
    }

    const background = {
        maxWidth: '100%',
        height: '60vw',
        backgroundColor: '#00634d',
        margin: 0,
        padding: 0,
    }

    const h1Style = {
        marginTop: '5vw',
        color: '#40ffb5',
        fontSize: '4.5vw',
        fontFamily: 'higuen elegant serif',
        marginBottom: '3vw',
    }

    const h5Style = {
        color: '#40ffb5',
        fontFamily: 'Cormorant Garamond',
        fontSize: '2vw',
        marginTop: '1.7vw',
        
    }

    const pStyle = {
        color: '#ffffff',
        fontFamily: 'Cormorant Garamond',
        fontSize: '1.7vw',
        
    }

    return (
        <div className="container" style={background}>
            <div className="row">
                <div className="title text-center mb-4">
                    <h1 style={h1Style}>Promos and Offers</h1>
                </div>
                <div className="col-md-4">
                    <div className="left text-center">
                        <img src={Discount} style={imgStyle} alt="Discount" />
                        <h5 style={h5Style}>Early Bird Discount </h5>
                        <p style={pStyle}>List your offers, promos, or special membership privileges and perks here to entice people to book your property.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="centre text-center">
                        <img src={Night} style={imgStyle} alt="Night" />
                        <h5 style={h5Style}>Book 3 Nights, Get 1 Night Free</h5>
                        <p style={pStyle}>List your offers, promos, or special membership privileges and perks here to entice people to book your property.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="right text-center">
                        <img src={Members} style={imgStyle} alt="Members" />
                        <h5 style={h5Style}>Wellhall Members Club</h5>
                        <p style={pStyle}>List your offers, promos, or special membership privileges and perks here to entice people to book your property.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promo;

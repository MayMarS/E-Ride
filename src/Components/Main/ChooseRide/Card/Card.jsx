import React, {useState} from 'react';
import './Card.scss';

const Card = (props) => {
    const [bike, setCard] = useState(props.cards[0]);

    const change = index => {
        setCard(props.cards[index]);
    }

    return (
        <div className="ride-tabs">
            <div className="ride-btns">
                <button className={bike === props.cards[0] ? "btn-ride btn-active" : "btn-ride"}
                    onClick={() => change(0)}>Ride Explorer
                </button> 
                <button className={bike === props.cards[1] ? "btn-ride btn-active" : "btn-ride"}
                    onClick={() => change(1)}>Ride Commuter
                </button> 
                <button className={bike === props.cards[2] ? "btn-ride btn-active" : "btn-ride"}
                    onClick={() => change(2)}>Ride Urban Cruiser
                </button> 
            </div>
            <div className="ride-card">
                <div className="card-info">
                    <h3>{bike.model}</h3>
                    <p className="kind">{bike.kind}</p>
                    <p>From €<span className="price">{bike.price}</span></p>
                    <p>{bike.text}</p>
                    <button className="btn-start">Start now</button>
                </div>
                <img src={bike.image} alt="bike"/>
            </div>
        </div>
    )
}

export default Card;
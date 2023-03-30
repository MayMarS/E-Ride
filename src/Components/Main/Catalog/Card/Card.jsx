import './Card.scss';

const Card = (props) => {
    return (
        <div className="card" key={props.card.id}>
            <img src={props.card.image} alt="bike"/>
            <p>From €<span className="price">{props.card.price}</span></p>
            <h3>{props.card.model}</h3>
            <p className="kind">{props.card.kind}</p>
            <button className="btn-details" toggle={props.card.toggle}>See details</button>
        </div>
    );
}

export default Card;
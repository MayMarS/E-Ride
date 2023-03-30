import React, {useState} from 'react';
import './Accordion.scss';

const Accordion = (props) => {

    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if(clicked === props.index) {
            //if clicked question is already active, then close it
            return setClicked(null);
        }
        setClicked(index);
    }

    return (
        <div className="info">
            <div className="show-info" onClick={() => toggle(props.index)} key={props.index}>
                <h4>{props.item.question}</h4>
                <span className={clicked === props.index ? "btn-arrows btn-minus" : "btn-arrows btn-plus"}></span>
            </div>
            {clicked === props.index ? (
                <div className="show-text">
                    <p>{props.item.answer}</p>
                </div>
                ) : null
            }
        </div>
    )
}

export default Accordion;
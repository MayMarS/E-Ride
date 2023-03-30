import './ChooseRide.scss';
import Card from './Card/Card';

const ChooseRide = (props) => {
    return (
        <section className="ride">
            <div className="container">
                <div className="ride-div">
                    <div className="ride-info">
                        <h2>You’re in charge</h2>
                        <p>Your subscription is fully flexible — with free cancelation at any time and no sign-up fees.</p>
                        <ul>
                            <li>Pick your city</li>
                            <li>Choose your ride</li>
                            <li>Delivery to your door</li>
                            <li>Ride freely</li>
                        </ul>
                    </div>
                    <Card cards={props.rides} />
                </div>
            </div>
        </section>
    )
}

export default ChooseRide;
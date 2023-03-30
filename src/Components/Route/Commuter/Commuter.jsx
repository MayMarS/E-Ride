// import './Commuter.scss';
import '../ProductsRoutes.scss';

const Commuter = (props) => {
    return (
        <section className="bike commuter">
                <div className="bike-div">
                    <div className="left">
                        <h2>{props.info.model}</h2>
                        <p className="kind">{props.info.kind}</p>
                        <p className="description">{props.info.description}</p>
                        <h3>Advantages</h3>
                        {
                            props.info.advantages.map(item => {
                                return(
                                    <ul>
                                        <li>{item}</li>
                                    </ul>
                                )
                            })
                        }
                        <div className="price-wrap">
                            <p className="from">From €<span className="price">{props.info.price}</span></p>
                            <button className="btn-start">Start now</button>
                        </div>
                    </div>
                    <div className="right">
                        <img src={props.info.image} alt="bike"/>
                        <ul>
                            <li>
                                <span>{props.info.batteryTitle}</span>
                                <p>{props.info.batteryVoltage}</p>
                            </li>
                            <li>
                            <span>{props.info.motorTitle}</span>
                                <p>{props.info.motorPower}</p>
                            </li>
                            <li>
                                <span>{props.info.milesTitle}</span>
                                <p>{props.info.milesDistance}</p>
                            </li>
                        </ul>
                    </div>
                </div>
        </section>
    )
}

export default Commuter;
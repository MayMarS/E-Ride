import './LearnMore.scss';
import Accordion from './Accordion/Accordion';

const LearnMore = (props) => {
    let learnItems = props.learn.map(item => <Accordion item={item} />)
    return (
        <section className="learn-more">
            <div className="container">
                <div className="learn-div">
                    <div className="learn-title">
                        <h2>Want to know more?</h2>
                        <button className="btn-more">Learn more</button>
                    </div>
                    <div className="learn-info">
                        {learnItems}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LearnMore;

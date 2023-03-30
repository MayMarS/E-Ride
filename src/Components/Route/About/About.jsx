import './About.scss';

const Block = (props) => {
    return(
        <div className="block">
            <img src={props.block.image} alt="icon"/>
            <h3>{props.block.title}</h3>
            <p>{props.block.text}</p>
        </div>
    )
}

const About = (props) => {
    let aboutItems = props.about.blocks.map(block => <Block block={block} />)
    return (
        <section className="about">
            <div className="container">
                <div className="about-div">
                    <h4>{props.about.question}</h4>
                    <h2>{props.about.title}</h2>
                    <div className="about-info">
                        {aboutItems}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
import {useState, useEffect} from 'react';
import './Business.scss';

const More = (props) => {
    const [moreInfo, setInfo] = useState(null);

    useEffect( () => {
        // console.log('component changed');
    })

    return(
        <div>
            <button onClick={() => setInfo(props.more.moreText)} className="btn-business">More</button>
            <p>{moreInfo}</p>
            <button className="btn-contact-us">Contact us</button>
        </div>
    )
}

const Article = (props) => {
    return(
        <div className="article">
            <span className="num">{props.article.num}</span>
            <span>{props.article.title}</span>
            <p>{props.article.text}</p>
            {<More more={props.article} />}
        </div>
    )
}

const Business = (props) => {
    let articleItems = props.business.articles.map(article => <Article article={article}/>)
    return (
        <section className="business">
            <div className="container">
                <div className="business-div">
                    <h4>{props.business.question}</h4>
                    <h2>{props.business.title}</h2>
                    <div className="business-info">
                        {articleItems}
                    </div>
                </div>
                <span className="city paris">Paris</span>
                <span className="city berlin">Berlin</span>
                <span className="city vienna">Vienna</span>
            </div>
        </section>
    )
}

export default Business;
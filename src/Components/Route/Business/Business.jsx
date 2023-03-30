import './Business.scss';

const Article = (props) => {
    return(
        <div className="article">
            <span className="num">{props.article.num}</span>
            <span>{props.article.title}</span>
            <p>{props.article.text}</p>
            <p>{props.article.moreText}</p>
            <button className="btn-contact-us">Contact us</button>
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
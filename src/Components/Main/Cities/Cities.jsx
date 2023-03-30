import './Cities.scss';

const Cities = () => {
    return (
        <section className="cities">
            <div className="container">
                <div className="cities-div">
                    <div className="cities-info">
                        <h3>Your city is our city</h3>
                        <p>Our rides are available in 5 European cities — and counting.</p>
                        <button className="btn-start">Start now</button>
                        <a href="#">Want to see Dance in your city?</a>
                    </div>
                    <div className="cities-names">
                        <h2>Berlin</h2>
                        <h2>Hamburg</h2>
                        <h2>Munich</h2>
                        <h2>Paris</h2>
                        <h2>Vienna</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cities;
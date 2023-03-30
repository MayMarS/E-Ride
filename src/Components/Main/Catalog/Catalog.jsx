import './Catalog.scss';
import Card from './Card/Card';
import Modal from './Modal/Modal';

const Catalog = (props) => {
    let catalogItems = props.catalog.map(card => <Card card={card} />)
    let modalItems = props.catalog.map(modal => <Modal modal={modal} />)
    return (
        <section className="catalog">
            <div className="container">
                <h2>Move your way</h2>
                <p>Choose the electric ride that suits your lifestyle.</p>
                <div className="bikes-div">
                    {catalogItems}
                </div>
                {modalItems}
            </div>
        </section>
    )
}

export default Catalog;

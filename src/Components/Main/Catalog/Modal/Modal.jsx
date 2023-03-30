import './Modal.scss';

const Modal = (props) => {
    return (
        <div className="bikes-modal" id={props.modal.id}>
            <div className="modal-content">
                <span className="close-btn"></span>
                <img src={props.modal.image} alt="bike"/>
                <div className="text">
                    <h3>{props.modal.model}</h3>
                    <p className="kind">{props.modal.kind}</p>
                    <p>{props.modal.description}</p>
                    <p>{props.modal.text}</p>
                    <p className="from">From €<span className="price">{props.modal.price}</span></p>
                    <button className="btn-start">Start now</button>
                </div>
            </div>
        </div>
    )
}
document.addEventListener('click', event => {
    if(event.target.classList.contains('btn-details')) {

        let modal = document.getElementById(event.target.getAttribute('toggle'));
        modal.style.display = "flex";

        document.addEventListener('click', event => {
            if(event.target.classList.contains('close-btn')) {
                modal.style.display = "none";
            }
        });
    }
});

export default Modal;
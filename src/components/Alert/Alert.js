import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Alert.scss"

const Alert = (props) => {
    return (
        <Modal {...props} className="modal" size="lg" aria-labelledby="contained-modal-title-vcenter" centered >

            <Modal.Body className='mod-body'>
               
                <p>
                    {props.message}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button  onClick={props.onHide}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Alert;
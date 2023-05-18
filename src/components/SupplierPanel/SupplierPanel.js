import { useEffect, useState } from "react";
import { URL_SUPPLIERS } from "../_Utils/Urls";
import { FloatingLabel } from "react-bootstrap";
import { usePut, usePost } from "../_Hooks/Customs";
import Alert from "../Alert/Alert";
import { Link, useNavigate } from "react-router-dom";


const SupplierPanel = ({ data = {} }) => {

    const [supplier, setSupplier] = useState({
        name: "",
        phoneNumber: "",
        email: ""

    });

    const [alertShow, setAlertShow] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const putData = usePut(URL_SUPPLIERS, data.id);
    const postData = usePost(URL_SUPPLIERS);

    const navigate = useNavigate();

    useEffect(() => {
        if (data.id > 0) {
            setSupplier({
                name: data.name,
                phoneNumber: data.phoneNumber,
                email: data.email
            })
        }
    }, [data])

    const handleChange = (e) => {
        setSupplier((prevValues) => {
            return {
                ...prevValues,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.id > 0) {

            putData(supplier, submitSucces);
        }
        else {

            postData(supplier, submitSucces);
        }
     
    }

    const alertDismiss = () => {
        setAlertShow(false);
        navigate("/suppliers", { replace: true });  // il replace è come se "interrompesse" la cronologia di navigazione
        //mutate();
    }


    const submitSucces = () => {
        setAlertMessage("Correctly saved");
        setAlertShow(true);
    }


    return (
        <>
            <form className="row" onSubmit={handleSubmit}>
                <div className="col-12">
                    <FloatingLabel controlId="txtName" label="Name" className="my-2">
                        <input id="txtName" required className="form-control" name="name" value={supplier.name} onChange={handleChange} placeholder="Name"></input>
                    </FloatingLabel>
                </div>
                <div className="col-12">
                    <FloatingLabel controlId="txtPhoneNumber" label="PhoneNumber" className="my-2">
                        <input id="txtPhoneNumber" required pattern="[0-9]+" className="form-control" name="phoneNumber" value={supplier.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
                    </FloatingLabel>
                </div>
                <div className="col-12">
                    <FloatingLabel controlId="txtEmail" label="Email" className="my-2">
                        <input id="txtEmail" required type="email" className="form-control" name="email" value={supplier.email} onChange={handleChange} placeholder="Email" />
                    </FloatingLabel>
                </div>
                <div className="col-12">
                    <div className="d-flex justify-content-around">
                        <button className="btn btn-sm btn-outline-success" type="submit" >Save</button>
                        <Link className="btn btn-sm btn-outline-danger" to="/suppliers">Go Back</Link>
                    </div>
                </div>
            </form>
            <Alert show={alertShow} onHide={alertDismiss} message={alertMessage} />

        </>
    );
}

export default SupplierPanel;
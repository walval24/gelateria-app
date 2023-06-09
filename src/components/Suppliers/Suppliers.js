import { useState } from "react";
import { useGet } from "../_Hooks/Customs"
import { URL_SUPPLIERS } from "../_Utils/Urls"
import Alert from "../Alert/Alert";
import { Link } from "react-router-dom";
import SupplierManager from "./SupplierManager";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckField } from "@fortawesome/free-solid-svg-icons";
import "./Suppliers.scss"



const Suppliers = () => {

    const { data, error, mutate } = useGet(URL_SUPPLIERS);
    const [alertShow, setAlertShow] = useState(false);
    const [AlertMessage, setAlertMessage] = useState("");

    const alertDismiss = () => {
        setAlertShow(false);
        mutate();
    }

    const deleteSuccess = () => {
        setAlertMessage("Successfully deleted");
        setAlertShow(true);
    }

    if (data) {
        return (

            <>
            <div className="sup-back">
                <div className="sup-title">
                    <h5> <FontAwesomeIcon icon={faTruckField} /> SUPPLIERS</h5>
                </div>
                <div className="container suppliers-top">
                    <Link to="new" className="btn btn-outline-success btn-sm">New Supplier</Link>
                    <div className="row">
                        {data.map(supplier => (
                            <SupplierManager key={supplier.id} supplier={supplier} deleteSuccess={deleteSuccess}/>

                        ))}
                    </div>
                </div>
                <Alert show={alertShow} onHide={alertDismiss} message={AlertMessage} />
                </div>
            </>
        );
    }
}

export default Suppliers;
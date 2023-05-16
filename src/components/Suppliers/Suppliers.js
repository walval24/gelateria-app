import { useState } from "react";
import { useGet } from "../_Hooks/Customs"
import { URL_SUPPLIERS } from "../_Utils/Urls"
import Alert from "../Alert/Alert";
import { Link } from "react-router-dom";
import SupplierManager from "./SupplierManager";



const Suppliers = () => {

    const { data, error, mutate } = useGet(URL_SUPPLIERS);
    const [alertShow, setAlertShow] = useState(false);
    const [AlertMessage, setAlertMessage] = useState("");

    const alertDismiss = () => {
        setAlertShow(false);
        mutate();
    }

    const deleteSuccess = () => {
        setAlertMessage("Eliminazione avvenuta");
        setAlertShow(true);
    }

    if (data) {
        return (

            <>

                <div className="container suppliers-top">
                    <h5>Suppliers</h5>
                    <Link to="new" className="btn btn-outline-success btn-sm">New Supplier</Link>
                    <div className="row">
                        {data.map(supplier => (
                            <SupplierManager key={supplier.id} supplier={supplier} deleteSuccess={deleteSuccess}/>

                        ))}
                    </div>
                </div>
                <Alert show={alertShow} onHide={alertDismiss} message={AlertMessage} />
            </>
        );
    }
}

export default Suppliers;
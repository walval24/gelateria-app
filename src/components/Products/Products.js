import Table from "react-bootstrap/Table";
import ProductTable from "./ProductTable";
import { URL_PRODUCTS } from "../_Utils/Urls"
import { useGet } from "../_Hooks/Customs";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Alert from "../Alert/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIceCream } from "@fortawesome/free-solid-svg-icons";
import "./Products.scss"



const Products = () => {
    const { data, error, isLoading, mutate } = useGet(URL_PRODUCTS);

    const [alertShow, setAlertShow] = useState(false);
    const [AlertMessage, setAlertMessage] = useState("");

    const alertDismiss = () => {
        setAlertShow(false);
        mutate();
    }

    const deleteSuccess = () => {
        setAlertMessage("Product deleted");
        setAlertShow(true);
    }
    if (data) {

        return (
            <>

                <div className="pr-title">
                    <h5><FontAwesomeIcon icon={faIceCream} />PRODUCTS</h5>
                </div>
                <div className="newProdBtn">
                    <Link className="btn btn-sm btn-outline-success m-2" to="new">Add new product </Link>
                    <Outlet context={{ mutate }} />
                </div>
                <div className="container">
                    <Table responsive>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Cover</th>
                                <th>Product Name</th>
                                <th>Vegan</th>
                                <th>Dairy Free</th>
                                <th>Nut Free</th>
                                <th>Supplier</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(product => (
                                <ProductTable key={product.id} product={product} deleteSuccess={deleteSuccess} />
                            ))}
                        </tbody>
                    </Table>

                    <Alert show={alertShow} onHide={alertDismiss} message={AlertMessage} />

                </div>
            </>
        );
    }
}

export default Products
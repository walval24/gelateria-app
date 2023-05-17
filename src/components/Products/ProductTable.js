import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { URL_PRODUCTS, URL_SUPPLIERS } from "../_Utils/Urls";
import { useDelete, useGet } from "../_Hooks/Customs";

import "./Products.scss"

const ProductTable = ({ product, deleteSuccess }) => {

    const base64prefix = "data:image/jpeg;base64,"

    const { data: supplier, error: supplierError } = useGet(URL_SUPPLIERS, product.supplierId);

    const deleteData = useDelete(URL_PRODUCTS, product.id);

    const performDelete = () => {
        deleteData(deleteSuccess);

    }

    return (
        <>
            <tr>
                <td className="align-middle">
                    <img src={base64prefix + product.cover} style={{ width: "100px" }} />
                </td>
                <td className="align-middle">
                    <div>{product.name}</div>
                </td>
                <td className="align-middle">
                    <div>
                        {product.vegan ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}
                    </div>
                </td>
                <td className="align-middle">
                    <div>
                        {product.dairyFree ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}
                    </div>
                </td>
                <td className="align-middle">
                    <div>
                        {product.nutfree ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}
                    </div>
                </td>
                <td className="align-middle">
                    <div>{supplier ? supplier.name : ""}</div>
                </td>
                <td className=" align-middle">
                    <Link className="btn text-warning" to={"edit/" + product.id}>
                        <FontAwesomeIcon icon={faPencil} />
                    </Link>
                    <button className="btn text-secondary" onClick={performDelete}>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </td>
            </tr>
    
        </>

    );
}


export default ProductTable
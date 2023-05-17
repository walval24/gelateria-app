import { useState } from "react";
import { useDelete, useGet } from "../_Hooks/Customs";
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import "./Suppliers.scss"
import { URL_SUPPLIERS } from "../_Utils/Urls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone,faPenToSquare,faTrashCan } from "@fortawesome/free-solid-svg-icons";

const SupplierManager = ({ supplier, deleteSuccess }) => {
  const [showDelete, setShowDelete] = useState(false);
  const { data: products, error } = useGet(URL_SUPPLIERS + "/" + supplier.id + "/products");
  const deleteData = useDelete(URL_SUPPLIERS, supplier.id);
  const performDelete = () => {
    deleteData(deleteSuccess);
  };

  return (
    <article className="col-12 col-md-6 col-lg-4">
      <div className="supplier-panel m-2 p-2">
        <Card>
          <Card.Body>
            <Card.Title>{supplier.name}</Card.Title>
            <Card.Text>
              <strong><FontAwesomeIcon icon={faPhone} /></strong>{" "}
              {supplier.phoneNumber ? supplier.phoneNumber : " No phone n°"}
            </Card.Text>
            <Card.Text>
              <strong><FontAwesomeIcon icon={faEnvelope} /></strong>{" "}
              {supplier.email ? supplier.email : "No email"}
            </Card.Text>
            <div className="d-flex justify-content-around">
              <Link className="btn btn-outline-light" to={"edit/" + supplier.id}>
              <FontAwesomeIcon icon={faPenToSquare} />
              </Link>
              <button className="btn btn-outline-light" onClick={() => setShowDelete(true)}>
              <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
          </Card.Body>
        </Card>

        <Alert className="mt-2" show={showDelete} variant="danger">
          <Alert.Heading className="alert-title">Delete Supplier {supplier.name} ? </Alert.Heading>
          {products && products.length > 0 ? (
            <p>{products.length} products will be deleted. Are you sure to proceed?</p>
          ) : (
            ""
          )}
          <div className="d-flex justify-content-end">
            <button className="btn btn-outline-success btn-sm me-2" onClick={performDelete}>
              Confirm
            </button>
            <button className="btn btn-outline-danger btn-sm me-2" onClick={() => setShowDelete(false)}>
              Go back
            </button>
          </div>
        </Alert>
      </div>
    </article>
  );
};

export default SupplierManager;
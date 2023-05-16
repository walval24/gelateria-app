import { useParams } from "react-router-dom";
import { URL_SUPPLIERS } from "../_Utils/Urls";
import SupplierPanel from "./SupplierPanel";
import { useGet } from "../_Hooks/Customs";



const EditSupplier = () => {

    const { id } = useParams();
  
    const { data, error } = useGet(URL_SUPPLIERS, id)
  
    if (data) {
      return (
  
        <div className="container">
          <h5>Modify supplier</h5>
          <SupplierPanel data={data} />
        </div>
      );
    }
  }
  
  export default EditSupplier;
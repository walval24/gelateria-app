import { useGet } from "../_Hooks/Customs";
import { URL_PRODUCTS } from "../_Utils/Urls";
import ProductPanel from "./ProductPanel";
import { useOutletContext, useParams } from "react-router-dom";



const EditProduct = () => {

    const { id } = useParams();

    const { data, error } = useGet(URL_PRODUCTS, id); 

    const { mutate } = useOutletContext(); 


    if (data) {
        return (
            <>
                <div className="m-2 p-2 border">

                    <h5>Edit Product</h5>
                    <ProductPanel data={data} mutate={mutate} />
                </div>

            </>
        );
    }
}

export default EditProduct;
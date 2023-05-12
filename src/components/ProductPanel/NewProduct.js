import { useOutletContext } from 'react-router-dom';
import ProductPanel from './ProductPanel';

const NewProduct = () => {

    const { mutate } = useOutletContext(); 

    return (
        <>
            <div className="m-2 p-2 border">

                <h5>New Product</h5>
                <ProductPanel mutate={mutate} />
            </div>

        </>
    )
}

export default NewProduct;

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import { usePost, usePut } from "../_Hooks/Customs";
import Alert from "../Alert/Alert";
import { URL_PRODUCTS, URL_SUPPLIERS } from "../_Utils/Urls";
import "./ProductPanel.scss";
import FetchSelect from "../FetchSelect/FetchSelect";




const ProductPanel = ({ data = {}, mutate }) => {

    const [product, setProduct] = useState({

        name: "",
        vegan: false,
        dairyFree: false,
        nutfree: false,
        cover: "",
        supplierId: 0

    })

    const [alertShow, setAlertShow] = useState(false);

    const [alertMessage, setAlertMessage] = useState("");

    const putData = usePut(URL_PRODUCTS, data.id);

    const postData = usePost(URL_PRODUCTS);

    const navigate = useNavigate();

    useEffect(() => {
        if (data.id > 0) {
            setProduct({
                name: data.name,
                vegan: data.vegan,
                dairyFree: data.dairyFree,
                nutfree: data.nutfree,
                supplierId:data.supplierId,
                cover: "",
            });
        }
    }, [data.id, data.name, data.vegan, data.dairyFree, data.nutfree, data.supplierId])

    const getBase64 = async (file) => {

        const base64prefix = "data:image/jpeg;base64,"

        var reader = new FileReader();

        await reader.readAsDataURL(file);
        reader.onload = function () {
            setProduct((prevValues) => {
                return {
                    ...prevValues,
                    "cover": reader.result.replace(base64prefix, "")
                }
            });
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
    const handleChange = (e) => {
        if (e.target.name === 'cover') {
            getBase64(e.target.files[0])
        }
        setProduct((prevValues) => {
            return {
                ...prevValues,
                [e.target.name]: e.target.value
            }
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (data.id > 0) {
            putData(product, submitSuccess);
        }
        else {
            postData(product, submitSuccess);
        }

    }
    const submitSuccess = () => {
        setAlertMessage("Salvataggio completato")
        setAlertShow(true);
    }
    const alertDismiss = () => {
        setAlertShow(false);
        navigate("/products", { replace: true });
        mutate();
    }

    return (

        <>

            <form className=" row" onSubmit={handleSubmit}>
                <div className=" col-6">
                    <label className=" form-lable">Product Name</label>
                    <input className=" form-control form-control-sm" name="name" value={product.name} onChange={handleChange} />
                </div>
                <div className="col-4">
                    <label className="form-label">Vegan</label>
                    <select className="form-control form-control-sm" name="vegan" value={product.vegan} onChange={handleChange}>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>
                </div>
                <div className="col-4">
                    <label className="form-label">Dairy Free</label>
                    <select className="form-control form-control-sm" name="dairyFree" value={product.dairyFree} onChange={handleChange}>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>
                </div>
                <div className="col-4">
                    <label className="form-label">Nut Free</label>
                    <select className="form-control form-control-sm" name="nutfree" value={product.nutfree} onChange={handleChange}>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>
                </div>
                <div className=" col-12">
                    <label className=" form-lable">Image</label>
                    <input className=" form-control form-control-sm" type="file" name="cover" onChange={handleChange} />
                </div>
                <div className=" col-6">
                    <label className=" form-lable">Supplier</label>
                    <FetchSelect className=" form-control form-control-sm" name="supplierId" value={product.supplierId} onChange={handleChange} url={URL_SUPPLIERS} />
                </div>
                <div className="col-12">
                    <div className=" d-flex justify-content-around mt-3">
                        <button className=" btn btn-success " type="submit">Save</button>
                        <Link className=" btn btn-outline-danger " to="/products">Dismiss</Link>
                    </div>
                </div>
            </form>
            <Alert show={alertShow} onHide={alertDismiss} message={alertMessage} />


        </>


    );
}


export default ProductPanel;
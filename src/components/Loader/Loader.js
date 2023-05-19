
import RiseLoader from "react-spinners/RiseLoader";
import './Loader.scss';


const Loader = () => {

    return (

        <div className="loader">
            <RiseLoader margin={5}  size={51} speedMultiplier={0.5} color="#126A16"  />
        </div>
        
    )
}

export default Loader;
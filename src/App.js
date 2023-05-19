import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import EditProduct from "./components/ProductPanel/EditProduct";
import NewProduct from "./components/ProductPanel/NewProduct";
import Suppliers from "./components/Suppliers/Suppliers";
import NewSupplier from "./components/SupplierPanel/NewSupplier";
import EditSupplier from "./components/SupplierPanel/EditSupplier";


function App() {


return (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />}>
          <Route path="edit/:id" element={<EditProduct />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="suppliers" element={<Suppliers />} />
        <Route path="suppliers/new" element={<NewSupplier />} />
        <Route path="suppliers/edit/:id" element={<EditSupplier />} />
      </Route>
    </Routes>
  </Router>
);
}

export default App;

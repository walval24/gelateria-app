import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import EditProduct from "./components/ProductPanel/EditProduct";
import NewProduct from "./components/ProductPanel/NewProduct";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />}>
            <Route path="edit/:id" element={<EditProduct />}/>
            <Route path="new" element={<NewProduct/>}/>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import { Route, Router, Routes } from "react-router-dom";
import Home from "../main/home";
import About from "../main/about";
import Contact from "../main/contact";
import ProductStore from "../main/store";
import ProductQuatation from "../../sales/products/productQuatation";
function HomeRouters() {
    return ( 

        <div>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/store" element={<ProductStore/>}/>
                <Route path="/quate" element={<ProductQuatation/>}/>

            </Routes>
        </div>
     );
}

export default HomeRouters;
import { Route, Routes} from "react-router-dom";
import AdminLogin from "../login";
import Register from "../register";

function AdminRouters() {
    return (  
        <div>
            <Routes>
                <Route path="/" element={<AdminLogin/>} />
                <Route path="register" element={<Register/>} />
            </Routes>
        </div>
    );
}

export default AdminRouters;
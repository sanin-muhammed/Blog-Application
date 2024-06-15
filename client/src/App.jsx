import { Routes, Route } from "react-router-dom";
import Tasks from "./pages/Blogs";

import "./App.css";
import Blogs from "./pages/Blogs";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
    return (
        <Routes>
            
            <Route path="/register" Component={Register} />
            <Route path="/login" Component={Login} />
            <Route path="/" Component={Blogs} />
        </Routes>
    );
};

export default App;

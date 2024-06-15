import React, { useState } from "react";
import { userLogin } from "../../actions/actions";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email) {
            toast.error("enter email");
            return;
        } else if (!formData.password) {
            toast.error("enter password");
            return;
        }
        const response = await userLogin(formData);
        if (response.status) {
            localStorage.setItem("token", response.token);
            navigate("/");
            toast(response.message);
        } else if (response.error) {
            toast.error(response.message);
        }
    };

    return (
        <div className="auth">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" onChange={handleInputChange} placeholder="enter email" />
                <input type="password" name="password" onChange={handleInputChange} placeholder="enter password" />
                <button>Login</button>
            </form>
            <p>
                Don't have an account? <Link to="/register">Register</Link>
                <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" transition={Flip} />
            </p>
        </div>
    );
};

export default Login;

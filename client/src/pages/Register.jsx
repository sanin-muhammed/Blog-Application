import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userRegister } from "../../actions/actions";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
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
        const response = await userRegister(formData);
        if (response.status) {
            navigate("/login");
            toast(response.message);
        } else if (response.error) {
            toast.error(response.message);
        }
    };
    return (
        <div className="auth">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" onChange={handleInputChange} placeholder="enter email" />
                <input type="password" name="password" onChange={handleInputChange} placeholder="enter password" />
                <button>Register</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            <ToastContainer position="top-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" transition={Flip} />
            </p>

        </div>
    );
};

export default Register;

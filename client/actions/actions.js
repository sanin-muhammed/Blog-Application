import axios from "../config/axiosConfig";

export const checkToken = async (token) => {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    try {
        const response = await axios.get("/auth",{headers});
        console.log(" successful:", response.data);
        return response.data;
    } catch (error) {
        console.log(" error =", error.response.data);
        return error.response.data;
    }
};

export const userLogin = async (formData) => {
    try {
        const response = await axios.post("/login",formData);
        console.log(" successful:", response.data);
        return response.data;
    } catch (error) {
        console.log(" error =", error.response.data);
        return error.response.data;
    }
};
export const userRegister = async (formData) => {
    try {
        const response = await axios.post("/register",formData);
        console.log(" successful:", response.data);
        return response.data;
    } catch (error) {
        console.log(" error =", error.response.data);
        return error.response.data;
    }
};





export const all_blogs = async () => {
    try {
        const response = await axios.get("/blogs");
        console.log(" successful:", response.data);
        return response.data;
    } catch (error) {
        console.log(" error =", error.response.data);
        return error.response.data;
    }
};

export const add_blog = async (formData) => {
    try {
        const response = await axios.post("/blogs", formData);
        console.log(" successful:", response.data);
        return response.data;
    } catch (error) {
        console.log(" error =", error.response.data);
        return error.response.data;
    }
};
export const update_blog = async (id, formData) => {
    try {
        const response = await axios.post(`/blogs/${id}`, formData);
        console.log(" successful:", response.data);
        return response.data;
    } catch (error) {
        console.log(" error =", error.response.data);
        return error.response.data;
    }
};
export const delete_blog = async (id) => {
    try {
        const response = await axios.delete(`/blogs/${id}`);
        console.log(" successful:", response.data);
        return response.data;
    } catch (error) {
        console.log(" error =", error.response.data);
        return error.response.data;
    }
};

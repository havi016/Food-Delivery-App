import axios from "axios";

const API_URL = "http://192.168.1.77:3000/users"; // /users to match router

// Sign up
export const signUp = async (name, email, password) => {
    return axios.post(`${API_URL}/sign-up`, { name, email, password });
};

// Sign in
export const signIn = async (email, password) => {
    return axios.post(`${API_URL}/sign-in`, { email, password });
};
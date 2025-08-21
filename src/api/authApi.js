import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://192.168.1.76:3000/users"; // /users to match router

// Sign up
export const signUp = async (name, email, password) => {
    return axios.post(`${API_URL}/sign-up`, { name, email, password });
};

// Sign in
export const signIn = async (email, password) => {
    return axios.post(`${API_URL}/sign-in`, { email, password });
};

export const getCurrentUser = async () => {
    const token = await AsyncStorage.getItem("token");
    return axios.get(`${API_URL}/current-user`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};
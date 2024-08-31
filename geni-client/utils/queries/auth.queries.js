import { api } from "../axios.config";

export const postLogin = async ({email, password}) => {
    const { data } = await api.post(`/users/login`, {user: {email, password}});

    return data;
};

export const postRegister = async ({email, password, name, status, phone, location, role}) => {
    // console.log({user: {email, password, name, status, phone}});
    const { data } = await api.post(`/users/create`, {user: {email, password, name, status, phone, location, role}});

    return data;
}
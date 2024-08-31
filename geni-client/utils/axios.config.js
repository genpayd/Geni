import axios from "axios";

export const api = axios.create({
    baseURL: `https://stk.cradlevoices.com/Api`,
    headers: {
        "Content-Type": "application/json"
    }
})
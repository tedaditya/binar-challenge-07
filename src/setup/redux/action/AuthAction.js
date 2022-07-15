import axios from "axios";
import Cookies from "js-cookie"

export const authLogin = (email, password, navigate) => async (dispatch) => {
    let inOneHours = new Date(new Date().getTime() + 60 * 60 * 1000);
    try {
        dispatch({type: `LOADING`});
        console.log(email, password)
        await axios.post(`https://rent-car-appx.herokuapp.com/admin/auth/login`, {
            email: email,
            password: password,
        })
            .then((res) => {
                dispatch({
                    type: `LOGIN`,
                    payload: res.data,
                })
                Cookies.set('token', res.data.access_token, {expires: inOneHours})
                if(res.data.role === "Customer") {
                    Cookies.set('role', 'customer')
                    navigate('/')
                } else {
                    Cookies.set('role', 'admin')
                    navigate('/admin')
                }
            })
    } catch (err) {
        dispatch({
            type: `ERROR`,
            error: err.message,
        });
    }
}

export const authRegister = (email, password, navigate) => async (dispatch) => {
    try {
        dispatch({type: `LOADING`});
        console.log(email, password)
        await axios.post(`https://rent-car-appx.herokuapp.com/admin/auth/register`, {
            email: email,
            password: password,
            role: "Customer"
        })
            .then((res) => {
                dispatch({
                    type: `REGISTER`,
                    payload: res.data,
                })
                navigate('/login')
            })
    } catch (err) {
        dispatch({
            type: `ERROR`,
            error: err.message,
        });
    }
}

export const logout = () => (dispatch) => {
    Cookies.remove('token')
    Cookies.remove('role')
}
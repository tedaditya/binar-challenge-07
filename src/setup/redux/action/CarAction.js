import axios from "axios";
import {DELETE_CAR_BY_ID, GET_ALL_CAR, GET_CAR_BY_ID, POST_CAR} from "../type/CarType";

export const getAllCar = () => async (dispatch) => {
    try {
        dispatch({type: `${GET_ALL_CAR}_LOADING`});

        await axios.get(`https://rent-car-appx.herokuapp.com/admin/car`)
            .then((res) => {
                console.log(res.data)
                dispatch({
                    type: `${GET_ALL_CAR}_FULFILLED`,
                    payload: res.data,
                })
            })
    } catch (err) {
        dispatch({
            type: `${GET_ALL_CAR}_ERROR`,
            error: err.message,
        });
    }
}

export const getCarById = (id) => async (dispatch) => {
    try {
        dispatch({type: `${GET_CAR_BY_ID}_LOADING`});

        await axios.get(`https://rent-car-appx.herokuapp.com/admin/car/${id}`)
            .then((res) => {
                console.log(res)
                dispatch({
                    type: `${GET_CAR_BY_ID}_FULFILLED`,
                    payload: res.data,
                })
            })
    } catch (err) {
        dispatch({
            type: `${GET_CAR_BY_ID}_ERROR`,
            error: err.message,
        });
    }
}

export const newCar = (formData) => async (dispatch) => {
    try {
        dispatch({type: `${GET_CAR_BY_ID}_LOADING`});

        await axios.post(`https://rent-car-appx.herokuapp.com/admin/car`, formData)
            .then((res) => {
                // dispatch({type: `${POST_CAR}_FULFILLED`});
            })
    } catch (err) {
        dispatch({
            type: `${GET_CAR_BY_ID}_ERROR`,
            error: true,
        });
    }
}

export const deleteCarById = (id) => async (dispatch) => {
    console.log("click")
    try {
        dispatch({type: `${GET_CAR_BY_ID}_LOADING`});

        await axios.delete(`https://rent-car-appx.herokuapp.com/admin/car/${id}`)
            .then((res) => {
                console.log(res)
                dispatch({
                    type: `${DELETE_CAR_BY_ID}_FULFILLED`,
                    payload: {id: id},
                })
            })
    } catch (err) {
        dispatch({
            type: `${GET_CAR_BY_ID}_ERROR`,
            error: err.message,
        });
    }
}
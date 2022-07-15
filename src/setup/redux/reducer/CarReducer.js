import {DELETE_CAR_BY_ID, GET_ALL_CAR, GET_CAR_BY_ID, POST_CAR} from "../type/CarType";

const initialState = {
    data: [],
    dataSelection: [],
    carSpecs: {
        capacity: 4,
        transmission: "Manual",
        productionYear: 2020
    },
    isLoading: true,
    error: false,
};

const CarReducer = (state = initialState, action) => {
    const {type, payload, error} = action;
    switch (type) {
        case`${GET_ALL_CAR}_LOADING`:
            return {
                ...state,
            };
        case`${GET_ALL_CAR}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                data: payload
            };
        case`${GET_ALL_CAR}_ERROR`:
            return {
                ...state,
                isLoading: false,
                error: error
            };
        case`${GET_CAR_BY_ID}_LOADING`:
            return {
                ...state,
                error: false
            };
        case`${GET_CAR_BY_ID}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                dataSelection: payload
            };
        case`${GET_CAR_BY_ID}_ERROR`:
            return {
                ...state,
                isLoading: false,
                error: error
            };
        case`${POST_CAR}_FULFILLED`:
            return {
                isLoading: false,
            };
        case`${POST_CAR}_ERROR`:
            return {
                ...state,
                isLoading: false,
                error: error
            };
        case`${DELETE_CAR_BY_ID}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                data: state.data.filter( (item) => item.id !== action.payload.id )
            };
        default:
            return {
                ...state,
            };
    }
}

export default CarReducer
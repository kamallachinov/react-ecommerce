import { loginStart, loginFailure, loginSuccess } from "./userRedux"
import { publicRequest, userRequest } from '../requestMethods'
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure());
    }
}

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("/products");
        dispatch(getProductSuccess(res.data))
    } catch (err) {
        dispatch(getProductFailure());
    }
}

export const deleteProducts = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id))
    } catch (err) {
        dispatch(deleteProductFailure());
    }
}

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        const res = await userRequest.put(`/products/${id}`);
        dispatch(updateProductSuccess({ id: id, product: product }))
    } catch (err) {
        dispatch(updateProductFailure());
    }
}

export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
        const res = await userRequest.post("/products", product);
        dispatch(addProductSuccess(res.data));
    } catch (err) {
        console.error(err);
        dispatch(addProductFailure());
    }
}

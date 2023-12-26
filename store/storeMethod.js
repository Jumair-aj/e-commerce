import { ALL_CATEGORIES, ALL_PRODUCTS, CART, PRODUCTS_BY_CATEGORY } from "@/config/api-urls"
import { CommonAPI } from "@/lib/CommonAPI"
import { storeActions } from "./storeSlice"

export const getAllProducts = ()=>{
    return async(dispatch)=>{
        try{
            const response = await CommonAPI(ALL_PRODUCTS)
        dispatch(storeActions.getAllProducts({response:response}));
            
        return response
    }
        catch(err){
            console.log(err)
            dispatch(storeActions.getAllProducts({response:err.response}));
        }
    }
}

export const getAllCategories = ()=>{
    return async(dispatch)=>{
        try{
            const response = await CommonAPI(ALL_CATEGORIES)
        dispatch(storeActions.getAllCategories({response:response}));
        return response
    }
        catch(err){
            console.log(err)
            dispatch(storeActions.getAllCategories({response:err.response}));
        }
    }
}

export const getProductsByCategory = (value)=>{
    return async(dispatch)=>{
        try{
            console.log(value)
            const response = await CommonAPI(PRODUCTS_BY_CATEGORY + value.split(' ').join('') )
        dispatch(storeActions.getProductsByCategory({response:response}));
        return response
    }
        catch(err){
            console.log(err)
            dispatch(storeActions.getProductsByCategory({response:err.response}));
        }
    }
}

export const addToCart = (value)=>{
    return async(dispatch)=>{
        try{
            console.log(value)
            const response = await CommonAPI(CART ,value,'POST' )
        dispatch(storeActions.addToCart({response:response}));
        return response
    }
        catch(err){
            console.log(err)
            dispatch(storeActions.getProductsByCategory({response:err.response}));
        }
    }
}
import { ALL_CATEGORIES, ALL_PRODUCTS } from "@/config/api-urls"
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

export const getProductsByCategory = ({value})=>{
    return async(dispatch)=>{
        try{
            const response = await CommonAPI(ALL_CATEGORIES + value )
        dispatch(storeActions.getProductsByCategory({response:response}));
        return response
    }
        catch(err){
            console.log(err)
            dispatch(storeActions.getProductsByCategory({response:err.response}));
        }
    }
}
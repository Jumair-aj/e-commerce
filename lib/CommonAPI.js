import { API } from "./api";

export const CommonAPI =async(API_URL,API_PARAMS={},REQUEST_TYPE='GET')=>{
    let response='';
    switch (REQUEST_TYPE){
        case "POST":
            response = await API.post(API_URL,API_PARAMS);
            return response;

        default:
            response = await API.get(API_URL,{params:API_PARAMS})
            return response.data;
    }



}
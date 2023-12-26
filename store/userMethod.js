import { USER } from "@/config/api-urls"
import { CommonAPI } from "@/lib/CommonAPI"

export const getUsers = () =>{
    return async (dispatch)=>{
        try{
            const response = await CommonAPI(USER)
            dispatch.userActions({response:response})
            return response
        }
        catch(err){

        }
    }
}
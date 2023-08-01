import toast from "react-hot-toast";



//validate login page 
export async function usernameValidate(values){
    const error = usernameVerify({},values)
    return error

}
//  validate user

function usernameVerify (error = {} ,values){
    if (!values.username){
        error.username = toast.error("User Name Required")
    }
    else if(values.username.includes("")){
        error.username = toast.error("Invalid Username")
    }
    return error;
}
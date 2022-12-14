let TOKEN = ""
let USER_ID = 0

export const url_host = "http://localhost:3000"

export const logoutUserSession = () => {
    TOKEN = ""
    USER_ID = 0
}

export const setAuthToken = (token) => {
    TOKEN = token
    if (TOKEN !== ""){
        return true
    }
    return false
}

export const getAuthToken = () =>{
    if (TOKEN !== ""){
        return TOKEN
    }
    return false    
}

export const setUserId = (id) =>{
    USER_ID = id
    if (USER_ID !== 0){
        return true
    }
    return false
}

export const getUserId = () => {
    if(USER_ID !== 0){
        return USER_ID
    }
    return false
}


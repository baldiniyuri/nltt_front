import { UserLoginThunk } from "../../../Store/modules/login/thunk";

export const LoginUser = async (data) => {
    data.dispatch(UserLoginThunk(await data.UserData, data.setError, data.setLoading))
}
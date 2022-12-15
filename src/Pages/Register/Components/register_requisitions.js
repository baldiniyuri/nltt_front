import { UserRegisterThunk } from "../../../Store/modules/register/thunk";

export const RegisterUser = async (data) => {
    data.dispatch(UserRegisterThunk(await data.UserData, data.setError, data.setLoading))
}
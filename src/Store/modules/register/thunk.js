import { postUserRegister} from "./action";
import { setAuthToken, setUserId, url_host } from "../../../Components/Envs/envs";
import axios from 'axios'


export const UserRegisterThunk = (UserData, setError, setLoading, setIsLogged) => (dispatch) => {

  axios.post(`${url_host}/api/register/`, {
    "email": UserData.email,
    "password": UserData.password
  })
    .then((info) => {
      setAuthToken(info.data.token)
      setUserId(info.data.userId)
      setIsLogged(true)
      setLoading(false)
      dispatch(postUserRegister(info.data));
    })
    .catch((error) => {
      if (error.response) {
        setLoading(false)
        setError(error.response.status);
      }
      dispatch(postUserRegister(error));
    });
};
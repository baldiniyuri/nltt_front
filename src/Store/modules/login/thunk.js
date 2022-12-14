import { postUserLogin} from "./action";
import { setAuthToken, setUserId } from "Components/Envs/envs";
import axios from 'axios'


export const UserLoginThank = (UserData, setError, setLoading, setIsLogged) => (dispatch) => {
  axios.post(`/api/login/`, {
    "email": UserData.email,
    "password": UserData.password
  })
    .then((info) => {
      setAuthToken(info.data.token)
      setUserId(info.data.userId)
      setIsLogged(true)
      setLoading(false)
      dispatch(postUserLogin(info.data));
    })
    .catch((error) => {
      if (error.response) {
        setLoading(false)
        setError(error.response.status);
      }
      dispatch(postUserLogin(error));
    });
};
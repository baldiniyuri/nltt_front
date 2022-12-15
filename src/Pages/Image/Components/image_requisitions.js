import { PostImagesThunk } from "../../../Store/modules/images/thunk";

export const postImage = async (data) => {
    data.dispatch(PostImagesThunk(await data.userData, data.setError, data.setLoading))
}
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";

const useCommonDispatch = () => {
    const dispatch:AppDispatch = useDispatch();
    return dispatch
}

export default useCommonDispatch;
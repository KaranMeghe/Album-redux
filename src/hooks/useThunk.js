import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";

const useThunk = (thunk) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const runThunk = useCallback((arg) => {
        setIsLoading(true);
        dispatch(thunk(arg))
            .unwrap()
            .catch((err) => setError(err))
            .finally(() => setIsLoading(false));
    }, [thunk, dispatch]);

    return [isLoading, error, runThunk];

};

export default useThunk;
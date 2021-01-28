import { useCallback, useState } from 'react';

const useInput = (initalState) => {
    const [state, setState] = useState(initalState);
    const onChange = useCallback((e) => {
        setState(e.target.value);
    }, [])
    return [state, onChange];
};

export default useInput;
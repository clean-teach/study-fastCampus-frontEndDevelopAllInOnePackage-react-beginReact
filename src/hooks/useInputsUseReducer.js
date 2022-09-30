// 숙제 : useInputs 커스텀 Hook 을 한번 useReducer 를 사용해서 구현해보세요.

import { useCallback, useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE' :
            return {
                ...state,
                [action.name]: action.value
            };
        case 'RESET' : 
            return action.initialForm;
        default :
            return state;
    }
}

function useInputsUseReducer(initialForm) {
    const [form, dispatch] = useReducer(reducer, initialForm);

    const onChange = useCallback(event => {
        const {name, value} = event.target;
        dispatch({type: 'CHANGE', name, value});
    }, []);
    const onReset = useCallback(() => (
        dispatch({type: 'RESET', initialForm})
    ), [initialForm]);

    return [form, onChange, onReset];
}

export default useInputsUseReducer;
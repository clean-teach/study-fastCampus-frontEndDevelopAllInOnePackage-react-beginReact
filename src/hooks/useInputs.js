import { useCallback, useState } from "react";

function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);

    const onChange = useCallback(event => {
        const {name, value} = event.target;
        setForm(form => (
            {
                ...form,
                [name] : value
            }
        ));
    }, []);
    const onReset = useCallback(() => (
        setForm(initialForm)
    ), [initialForm]);

    return [form, onChange, onReset];
}

export default useInputs;
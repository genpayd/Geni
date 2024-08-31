/**
 * 
 * @param {ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>} e 
 * @param {Dispatch<SetStateAction<F>>} setData 
 */

export const handleChange = (e, setData) => {
    const name = e.target.name;
    const type = e.target.type;

    const value = () => {
        switch (type) {
            case "checkbox":
                return (e.target).checked;
            default:
                return e.target.value;
        }
    };

    setData((prevTaskData) => {
        return {
            ...prevTaskData,
            [name]: value()
        }
    });
};


/**
 * 
 * @param {*} param0 
 * @returns 
 */
export function checkFormInputs({ data = {}, exclude = [] }) {
    const data_include = Object.keys(data)
    .filter((key) => exclude.includes(key) === false)
    .map((inclusion_key) => [inclusion_key, data[inclusion_key]])
    .reduce(function (prev, curr) {
        // cover boolean exception with a conditional since value false evaluates to false (hence empty) when passed through Boolean instance
        prev[curr[0]] = typeof curr[1] == "boolean" ? String(curr[1]) : curr[1];
        return prev;
    }, {});

    if ([...Object.values(data_include)].every(Boolean)) {
        return true;
    } else {
        return false;
    }
}
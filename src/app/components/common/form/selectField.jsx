import React from "react";
import PropTypes from "prop-types";

const SelectField = ({
    label,
    value,
    name,
    onChange,
    defaultOption,
    defaultValue,
    options,
    error
}) => {
    const getInputClasses = () => {
        return "form-select" + (error ? " is-invalid" : "");
    };
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((optionsName) => ({
                  name: options[optionsName].name,
                  value: options[optionsName]._id
              }))
            : options;
    const defaultOptionValue = {
        value: value._id,
        label: value.name
    };

    return (
        <div className="mb-4">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <select
                className={getInputClasses()}
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
            >
                <option value={defaultOptionValue.value}>
                    {defaultOptionValue.label}
                </option>
                {optionsArray &&
                    optionsArray.map((option) => (
                        // console.log(option);
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.name}
                        </option>
                    ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};
SelectField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    onChange: PropTypes.func,
    defaultValue: PropTypes.object,
    error: PropTypes.string,
    name: PropTypes.string,
    defaultOption: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
export default SelectField;

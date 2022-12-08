import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
const MultiSelectField = ({ options, onChange, name, label, defaultValue }) => {
    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((optionsName) => ({
                  label: options[optionsName].name,
                  value: options[optionsName]._id,
                  color: options[optionsName].color
              }))
            : options;

    const handleChange = (value) => {
        onChange({ name, value });
    };
    const optionsDefaulValue = defaultValue.map((value) => ({
        label: value.name,
        value: value._id
    }));
    // console.log(defaultValue);
    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>
            <Select
                isMulti
                defaultValue={optionsDefaulValue}
                closeMenuOnSelect={false}
                options={optionsArray}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleChange}
                name={name}
            />
        </div>
    );
};
MultiSelectField.propTypes = {
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onChange: PropTypes.func,
    defaultValue: PropTypes.array,
    name: PropTypes.string,
    label: PropTypes.string
};
export default MultiSelectField;

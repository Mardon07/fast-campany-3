import React, { useState, useEffect } from "react";
import TextField from "./textField";
import { validator } from "../utils/validator";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    const validatorConfig = {
        email: {
            isRequerid: {
                message: "электронная почта обязательно для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        password: {
            isRequerid: {
                message: "пароль обязательно для заполнения"
            },
            isCapitalSymbol: {
                message: "пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "пароль должен содержать хотя бы одно число"
            },
            min: {
                message: "пароль должен состоять минимум из 8 символов",
                value: 8
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };
    return (
        <div className="container mt-5 ">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h3 className="mb-4">Login</h3>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Электронная почта"
                            value={data.email}
                            name="email"
                            onChange={handleChange}
                            error={errors.email}
                        />
                        <TextField
                            label="Пароль"
                            type="password"
                            value={data.password}
                            name="password"
                            onChange={handleChange}
                            error={errors.password}
                        />
                        <button disabled={!isValid} className="btn btn-primary w-100 mx-auto" >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

import React, { useEffect, useState } from "react";
import TextField from "../../common/form/textField";
import { validator } from "../../../utils/validator";
import api from "../../../api";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";
import { useParams, useHistory } from "react-router-dom";

const Edit = () => {
    const params = useParams();
    const history = useHistory();
    const userId = params.userId;

    const [data, setData] = useState();
    const [qualities, setQualities] = useState();
    const [errors, setErrors] = useState({});
    const [professions, setProfession] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setData(data));
        api.professions.fetchAll().then((data) => setProfession(data));
        api.qualities.fetchAll().then((data) => setQualities(data));
    }, []);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleClick = () => {
        history.push(`/users/${userId}`);

        api.users.update(userId, data);
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },

        profession: {
            isRequired: {
                message: "Обязательно выберите свою профессию"
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
    };
    const newDate = data;
    if (professions) {
        const newProf =
            typeof data.profession === "string" &&
            Object.values(professions).filter(
                (profession) => data.profession === profession._id
            );
        const newQualities = Object.values(data.qualities).map((qual) =>
            !qual.name
                ? {
                      name: qual.label,
                      _id: qual.value,
                      color: qual.color
                  }
                : qual
        );

        delete newDate.qualities;
        newDate.qualities = newQualities;
        if (newProf) {
            newDate.profession = Object.assign({}, ...newProf);
        }
    }

    return (
        data && (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Напишите свою имю"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Электронная почта"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                error={errors.email}
                            />

                            <SelectField
                                label="Выберите вашу профессию"
                                options={professions}
                                onChange={handleChange}
                                value={data.profession}
                                name="profession"
                                error={errors.profession}
                            />
                            <RadioField
                                options={[
                                    { name: "Male", value: "male" },
                                    { name: "Female", value: "female" },
                                    { name: "Other", value: "other" }
                                ]}
                                value={data.sex}
                                name="sex"
                                onChange={handleChange}
                                label="Выберите ваш пол"
                            />
                            <MultiSelectField
                                options={qualities}
                                onChange={handleChange}
                                defaultValue={data.qualities}
                                name="qualities"
                                label="Выберите ваши качество"
                            />

                            <button
                                className="btn btn-primary w-100 mx-auto"
                                type="submit"
                                disabled={!isValid}
                                onClick={handleClick}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    );
};

export default Edit;

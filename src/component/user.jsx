import React, { useState } from "react";
import API from "../api";
import { Link, useParams } from "react-router-dom";
import QualitiesList from "./qualitiesList";
const User = () => {
    const params = useParams();
    const { postId } = params;
    const [user, setUsers] = useState();
    // console.log(user);

    API.users.getById(postId).then((n) => setUsers(n));
    if (user) {
        return (
            <>
                <h1> {user.name}</h1>

                <h2>Профессия: {user.profession.name}</h2>

                <QualitiesList qualities={user.qualities} />

                <p>completedMeetings: {user.completedMeetings}</p>

                <h2>Rate: {user.rate}</h2>
                <Link to="/users">
                    <button className="btn btn-primary">
                        Все пользователи
                    </button>
                </Link>
            </>
        );
    }
    return <h1>Loading</h1>;
};

export default User;

import React, { useState, useEffect } from "react";
import Users from "./component/users";
import API from "./api";

function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handlDecrement = (id) => {
        setUsers((prevState) => prevState.filter((tag) => tag !== id));
    };

    const handleToggleBookMark = (num) => {
        setUsers(
            users.map((user) => {
                if (user._id === num) {
                    user.bookmark = !user.bookmark;

                    return user;
                } else {
                    return user;
                }
            })
        );
    };

    return (
        <>
            <Users
                users={users}
                onDecrement={handlDecrement}
                onBookMark={handleToggleBookMark}
            />
        </>
    );
}

export default App;

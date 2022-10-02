import React, { useState } from "react";
import Users from "./component/users";
import API from "./api";
import SearchStatus from "./component/searchStatus";

function App() {
    const [users, setUsers] = useState(API.users.fetchAll());
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
            <SearchStatus length={users.length} />
            <Users
                users={users}
                onDecrement={handlDecrement}
                onBookMark={handleToggleBookMark}
            />
        </>
    );
}

export default App;

import React from "react";
import Qualitie from "./qualitie";
import PropTypes from "prop-types";

function User({ user, onDecrement, onBookMark }) {
    return (
        <>
            <Qualitie
                user={user}
                onDecrement={() => onDecrement(user)}
                onBookMark={() => onBookMark(user._id)}
            />
        </>
    );
}

User.propTypes = {
    user: PropTypes.object.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onBookMark: PropTypes.func.isRequired
};
export default User;

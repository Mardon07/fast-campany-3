import React from "react";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";
// import { professions } from "../api/fake.api/professions.api";
function Qualitie({ user, onDecrement, onBookMark }) {
    return (
        <>
            <tr>
                <th>{user.name} </th>
                <td>
                    {user.qualities.map((qualiti) => (
                        <span
                            key={qualiti._id}
                            className={"badge bg-" + qualiti.color + " m-1"}
                        >
                            {qualiti.name}
                        </span>
                    ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>

                <td onClick={() => onBookMark(user._id)}>
                    <Bookmark bookmark={user.bookmark} />
                </td>
                <td>
                    <button
                        type="button"
                        className="btn btn-danger bg-danger btn-sm m-1"
                        onClick={() => onDecrement(user)}
                    >
                        delete
                    </button>
                </td>
            </tr>
        </>
    );
}

Qualitie.propTypes = {
    user: PropTypes.object.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onBookMark: PropTypes.func.isRequired
};
export default Qualitie;

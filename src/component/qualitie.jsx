import React from "react";
import Bookmark from "./bookmark";
function Qualitie({ users, onDecrement, onBookMark }) {
  return (
    <tr>
      <th>{users.name} </th>
      <td>
        {users.qualities.map((qualiti) => (
          <span className={"badge bg-" + qualiti.color + " m-1"}>
            {qualiti.name}
          </span>
        ))}
      </td>
      <td>{users.profession.name}</td>
      <td>{users.completedMeetings}</td>
      <td>{users.rate}</td>

      <td onClick={() => onBookMark(users._id)}>
        <Bookmark bookmark={users.bookmark} />
      </td>
      <button
        type="button"
        class="btn btn-danger bg-danger btn-sm m-1"
        onClick={() => onDecrement(users)}>
        delete
      </button>
    </tr>
  );
}

export default Qualitie;

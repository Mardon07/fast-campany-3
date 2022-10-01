import React from "react";
import Qualitie from "./qualitie";

function User({ users, onDecrement, onBookMark }) {
  return (
    <>
      {users.map((user) => (
        <Qualitie
          key={user._id}
          users={user}
          onDecrement={() => onDecrement(user)}
          onBookMark={() => onBookMark(user._id)}
        />
      ))}
    </>
  );
}

export default User;

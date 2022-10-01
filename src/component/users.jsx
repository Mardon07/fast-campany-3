import React from "react";
import SearchStatus from "./searchStatus";
import User from "./user";

const Users = ({ users, onDecrement, onBookMark }) => {
  if (users.length > 0) {
    return (
      <table class="table  table-striped ">
        <thead>
          {<SearchStatus length={users.length} />}

          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился,раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранные</th>
          </tr>
        </thead>
        <tbody>
          <User
            users={users}
            onDecrement={onDecrement}
            onBookMark={onBookMark}
          />
        </tbody>
      </table>
    );
  } else {
    return <>{<SearchStatus length={users.length} />}</>;
  }
};

export default Users;

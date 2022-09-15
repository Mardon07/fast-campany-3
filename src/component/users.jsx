import React, { useState } from "react";
import API from "../api";

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  const handlDecrement = (id) => {
    setUsers((prevState) => prevState.filter((tag) => tag !== id));
  };

  const handlNumber = () => {
    if (users.length < 5 && users.length > 1) {
      return (
        <p className="badge bg-primary m-0 fs-4">
          {users.length + " человека тусанёт сегодня с тобой"}
        </p>
      );
    } else if (users.length === 0) {
      return (
        <span className="badge bg-warning m-0 fs-4">
          {"никто сегодня с тобой не тусанёт"}
        </span>
      );
    } else {
      return (
        <span className="badge bg-primary m-0 fs-4">
          {users.length + " человек тусанёт сегодня с тобой"}
        </span>
      );
    }
  };

  if (users.length > 0) {
    return (
      <table class="table  table-striped ">
        <thead>
          {handlNumber()}

          <tr id="tr">
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился,раз</th>
            <th scope="col">Оценка</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr id={user._id}>
              <th>{user.name} </th>
              <td>
                {user.qualities.map((qualiti) => (
                  <span className={"badge bg-" + qualiti.color + " m-1"}>
                    {qualiti.name}
                  </span>
                ))}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}</td>
              <button
                type="button"
                class="btn btn-danger bg-danger btn-sm m-1"
                onClick={() => handlDecrement(user)}>
                delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    return <>{handlNumber()}</>;
  }
};

export default Users;

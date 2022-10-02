import React, { useState } from "react";
import { paginate } from "../utils/pagionate";
import Pagination from "./pagination";
import PropTypes from "prop-types";

import User from "./user";

const Users = ({ users, onDecrement, onBookMark }) => {
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);

    return (
        <>
            {count > 0 && (
                <table className="table  table-striped ">
                    <thead>
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
                        {userCrop.map((user) => (
                            <User
                                user={user}
                                onDecrement={onDecrement}
                                onBookMark={onBookMark}
                                key={user._id}
                            />
                        ))}
                    </tbody>
                </table>
            )}

            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};

Users.propTypes = {
    users: PropTypes.array.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onBookMark: PropTypes.func.isRequired
};

export default Users;

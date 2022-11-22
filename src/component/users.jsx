import React, { useState, useEffect } from "react";
import { paginate } from "../utils/pagionate";
import Pagination from "./pagination";
import API from "../api";
import UsersTable from "./usersTable";
import GroupList from "./groupList";
import SearchStatus from "./searchStatus";
import _ from "lodash";

const Users = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState([]);
    const [searchValue, setSearchValue] = useState();

    const pageSize = 8;

    const [users, setUsers] = useState();
    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handlDecrement = (id) => {
        setUsers(users.filter((tag) => tag._id !== id));
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
    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfessions(data));
    }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleSorte = (item) => {
        setSortBy(item);
    };

    const handleChangeSearch = ({ target }) => {
        if (selectedProf !== false) setSelectedProf();
        setSearchValue(target.value);
    };
    const handleProfessionSelect = (item) => {
        if (searchValue !== "") setSearchValue("");
        setSelectedProf(item);
    };

    if (users) {
        const filterUsers = searchValue
            ? users.filter((user) =>
                user.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            : selectedProf
                ? users.filter((user) => user.profession._id === selectedProf._id)
                : users;

        const count = filterUsers.length;
        const sortedUsers = _.orderBy(
            filterUsers,
            [sortBy.path],
            [sortBy.order]
        );
        const userCrop = paginate(sortedUsers, currentPage, pageSize);

        const clearFilter = () => {
            setSelectedProf();
        };

        return (
            <>
                <div className="d-flex">
                    {professions && (
                        <div className="d-flex flex-column flex-shrink p-3">
                            <GroupList
                                selectedItem={selectedProf}
                                items={professions}
                                onItemSelect={handleProfessionSelect}
                            />
                            <button
                                className="btn btn-secondary mt-2"
                                onClick={clearFilter}
                            >
                                Очистить
                            </button>
                        </div>
                    )}
                    <div className="d-flex flex-column">
                        <SearchStatus length={count} />
                        <div>
                            <input
                                className="form-control "
                                type="text"
                                name="search"
                                placeholder="Search..."
                                value={searchValue}
                                onChange={handleChangeSearch}
                            />
                        </div>
                        {count > 0 && (
                            <UsersTable
                                users={userCrop}
                                onSort={handleSorte}
                                selectedSort={sortBy}
                                onDecrement={handlDecrement}
                                onBookMark={handleToggleBookMark}
                            />
                        )}
                        <div className="d-flex justify-content-center">
                            <Pagination
                                itemsCount={count}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return "...loading";
};
export default Users;

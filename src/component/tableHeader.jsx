import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                path: selectedSort.path,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            return onSort({ path: item, order: "asc" });
        }
    };
    const onDown = () => {
        if (selectedSort.order === "asc") {
            return <i className="bi bi-caret-up-fill"></i>;
        } else {
            return <i className="bi bi-caret-down-fill"></i>;
        }
    };
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].path
                                ? () => handleSort(columns[column].path)
                                : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        <span>
                            {columns[column].name}{" "}
                            {selectedSort.path === columns[column].path
                                ? onDown()
                                : ""}{" "}
                        </span>
                    </th>
                ))}

                {/* <th scope="col">Качества</th>
                <th onClick={() => handleSort("profession.name")} scope="col">
                    Профессия
                </th>
                <th onClick={() => handleSort("completedMeetings")} scope="col">
                    Встретился,раз
                </th>
                <th onClick={() => handleSort("rate")} scope="col">
                    Оценка
                </th>
                <th onClick={() => handleSort("bookmark")} scope="col">
                    Избранные
                </th>
                <th /> */}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};
export default TableHeader;

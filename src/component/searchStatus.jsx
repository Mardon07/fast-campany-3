import React from "react";
import PropTypes from "prop-types";

function SearchStatus({ length }) {
    const renderPhrase = () => {
        if (length > 4 && length < 15) return "человек тусанёт";
        if (length < 5 && length > 1) return "человека тусанут";
        return "человек тусанёт";
    };

    return (
        <h2>
            <span
                className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}
            >
                {length > 0
                    ? `${length + " " + renderPhrase()} с тобой сегодня`
                    : "Никто с тобой не тусанет"}
            </span>
        </h2>
    );
}

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;

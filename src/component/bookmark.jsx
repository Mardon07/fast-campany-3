import React from "react";
import PropTypes from "prop-types";
function Bookmark({ status, ...rest }) {
    return <i {...rest} className={"bi bi-bookmark" + (status ? "-heart-fill" : "")}></i>;
}

Bookmark.propTypes = {
    status: PropTypes.bool.isRequired
};

export default Bookmark;

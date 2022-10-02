import React from "react";
import PropTypes from "prop-types";
function Bookmark({ bookmark }) {
    if (!bookmark) {
        return <i className="bi bi-bookmark"></i>;
    }
    if (bookmark) {
        return <i className="bi bi-bookmark-heart-fill"></i>;
    }
}

Bookmark.propTypes = {
    bookmark: PropTypes.bool.isRequired
};

export default Bookmark;

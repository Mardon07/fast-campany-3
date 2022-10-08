import React from "react";
import PropTypes from "prop-types";

function Qualitie({ color, name }) {
    return (
        <>
            <span className={"badge bg-" + color + " m-1"}>{name}</span>
        </>
    );
}
Qualitie.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Qualitie;

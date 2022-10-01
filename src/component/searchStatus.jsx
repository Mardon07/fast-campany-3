import React from "react";

function SearchStatus({ length }) {
  if (length < 5 && length > 1) {
    return (
      <p className="badge bg-primary m-0 fs-4">
        {length + " человека тусанёт сегодня с тобой"}
      </p>
    );
  } else if (length === 0) {
    return (
      <span className="badge bg-warning m-0 fs-4">
        {"никто сегодня с тобой не тусанёт"}
      </span>
    );
  } else {
    return (
      <span className="badge bg-primary m-0 fs-4">
        {length + " человек тусанёт сегодня с тобой"}
      </span>
    );
  }
}

export default SearchStatus;

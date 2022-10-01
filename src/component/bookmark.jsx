import React from "react";

function Bookmark({ bookmark }) {
  if (!bookmark) {
    return <i class="bi bi-bookmark"></i>;
  }
  if (bookmark) {
    return <i class="bi bi-bookmark-heart-fill"></i>;
  }
}

export default Bookmark;

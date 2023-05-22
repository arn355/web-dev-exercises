import React from "react";
import "./VoteBtn.css";

const VoteBtn = ({ name, voted, type, callback }) => {
  return (
    <button
      onClick={() => {
        if (type === "voted") {
          if (voted < 10) {
            callback(voted + 1);
          } else {
            alert("Cannot Voted more");
          }
        } else {
          if (voted > 0) {
            callback(voted - 1);
          } else {
            alert("Cannot Unvote");
          }
        }
      }}
    >
      {name}
    </button>
  );
};

export default VoteBtn;

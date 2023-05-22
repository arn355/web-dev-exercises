import React, { useState } from "react";
import "./Blog.css";
import VoteBtn from "./VoteBtn";
import Display from "./Display";

const Blog = ({ category, name, info, image }) => {
  const [voted, setVoted] = useState(0);

  return (
    <div className="food-blog">
      <div className="food-content">
        <div>
          <h2>{category}</h2>
          <h3>{name}</h3>
          <p>{info}</p>
        </div>
        <div>
          <img src={image} alt={name} />
        </div>
      </div>
      <div className="btn-container">
        <VoteBtn
          name={"Click to Vote"}
          voted={voted}
          type={"voted"}
          callback={setVoted}
        />
        <Display voted={voted} />
        <VoteBtn
          name={"Click to Unvote"}
          voted={voted}
          type={"unvoted"}
          callback={setVoted}
        />
      </div>
    </div>
  );
};

export default Blog;

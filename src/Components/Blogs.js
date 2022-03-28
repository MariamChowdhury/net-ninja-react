import React from "react";
import { Link } from "react-router-dom";

const Blogs = ({ blog }) => {
  // console.log(props.blog);
  return (
    <div>
      {blog.map((blog) => (
        <div key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <h2 className="font-semibold text-lg text-pink-600">
              {blog.title}
            </h2>
            <p>Written by: {blog.author}</p>
          </Link>
          {/* next line important  */}
          {/* <button onClick={() => handleDelete(blog.id)}>Delete</button> */}
        </div>
      ))}
    </div>
  );
};

export default Blogs;

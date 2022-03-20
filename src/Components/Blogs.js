import React from "react";

const Blogs = ({ blog }) => {
  // console.log(props.blog);
  return (
    <div>
      {blog.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          {/* next line important  */}
          {/* <button onClick={() => handleDelete(blog.id)}>Delete</button> */}
        </div>
      ))}
    </div>
  );
};

export default Blogs;

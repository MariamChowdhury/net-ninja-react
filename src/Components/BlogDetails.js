import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, loading } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();
  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="blog-details">
      <h2>Blog detail no -{id} </h2>
      {loading && <div> Loading..... </div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
      <button className="rounded-full" onClick={handleDelete}> Delete</button>
    </div>
  );
};

export default BlogDetails;

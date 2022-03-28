import React from "react";

import Blogs from "./Blogs";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blog, loading } = useFetch("http://localhost:8000/blogs");
  console.log(React.version);
  return (
    <div>
      {loading && <div>Loading..........</div>}
      {blog && <Blogs blog={blog} />}
    </div>
  );
};

export default Home;

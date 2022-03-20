// custom reusable hook
import { useEffect } from "react";
import { useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [url]);
  // const handleDelete = (id) => {
  //   // next line important
  //   const newBlog = blog.filter((blog) => blog.id !== id);
  //   setBlog(newBlog);
  // };
  return { data, loading };
};

export default useFetch;

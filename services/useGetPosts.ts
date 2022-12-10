import { useEffect, useState } from "react";
import useSWR from "swr";
import { Posts } from "../types";

export default function useGetPosts(page?: number) {
  const [newPosts, setNewPosts] = useState([]);
  const { data, error } = useSWR<Posts>(
    "https://jsonplaceholder.typicode.com/posts?_limit=40",
    (url) => fetch(url).then((res) => res.json())
  );

  if (page) {
    useEffect(() => {
      const newPosts = data?.slice((page - 1) * 10, page * 10);
      setNewPosts(newPosts as []);
    }, [data, page]);
  }

  return {
    posts: page ? newPosts : data,
    isLoading: !error && !data,
    isError: error,
    totalCount: data?.length,
  };
}

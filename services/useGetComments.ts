import { useEffect, useState } from "react";
import useSwr from "swr";
import { Comments } from "../types";

export default function useGetComments(page?: number) {
  const [newCommentArray, setNewCommentArray] = useState([]);
  const { data, error } = useSwr<Comments>(
    "https://jsonplaceholder.typicode.com/comments?_limit=40",
    (url) => fetch(url).then((res) => res.json())
  );
  if (page) {
    useEffect(() => {
      const NewCommentArray = data?.slice((page - 1) * 10, page * 10);
      setNewCommentArray(NewCommentArray as []);
    }, [data, page]);
  }
  return {
    comments: page ? newCommentArray : data,
    isLoading: !error && !data,
    isError: error,
    totalCount: data?.length,
  };
}

export function useGetPostsComments(id: number) {
  const { data, error } = useSwr<Comments>(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    (url) => fetch(url).then((res) => res.json())
  );
  return {
    comments: data,
    isLoading: !error && !data,
    isError: error,
  };
}

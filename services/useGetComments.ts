import useSwr from "swr";
import { Comments } from "../types";

export default function useGetComments() {
  const { data, error } = useSwr<Comments>(
    "https://jsonplaceholder.typicode.com/comments?_limit=40",
    (url) => fetch(url).then((res) => res.json())
  );
  return {
    comments: data,
    isLoading: !error && !data,
    isError: error,
  };
}

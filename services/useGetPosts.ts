import useSWR from "swr";
import { Posts } from "../types";

export default function useGetPosts() {
  const { data, error } = useSWR<Posts>(
    "https://jsonplaceholder.typicode.com/posts?_limit=40",
    (url) => fetch(url).then((res) => res.json())
  );
  return {
    posts: data,
    isLoading: !error && !data,
    isError: error,
  };
}

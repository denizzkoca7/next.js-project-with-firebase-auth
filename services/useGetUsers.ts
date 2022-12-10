import useSWR from "swr";
import { Users } from "../types";

const useGetUsers = (id: number) => {
  const { data, error } = useSWR<Users>(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    (url) => fetch(url).then((res) => res.json())
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useGetUsers;

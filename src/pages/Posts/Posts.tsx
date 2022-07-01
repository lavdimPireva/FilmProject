import axios from "axios";
import { useQuery } from "react-query";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  const { isLoading, isError, error, data, isFetching } = useQuery<Post[]>(
    "posts",
    () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.data),
    {
      // refetchOnMount: false,
      // cacheTime: 0,
      // keepPreviousData: false,
      // enable:
    }
  );

  console.log({ isLoading, error, data, isFetching });

  return (
    <>
      {isLoading && <div>Loading posts...</div>}

      {isError && <div>Posts couldn't be loaded</div>}

      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Posts;

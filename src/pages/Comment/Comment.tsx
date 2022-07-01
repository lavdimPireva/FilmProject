import axios from "axios";
import { useQuery } from "react-query";
import { Header } from "../../layout/Header/Header";
import { Sidebar } from "../../layout/HomeLayout/HomeSidebar/Sidebar";

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const fetchComments = async () => {
  const res = await axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.data);

  return res;
};

export const Comment = () => {
  const { isLoading, isError, data } = useQuery<Comment[]>(
    "comments",
    fetchComments
  );

  return (
    <>
      {isLoading && <div>Loading posts...</div>}

      {isError && <div>Comments couldn't be loaded</div>}

      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.body}</li>
          ))}
        </ul>
      )}
    </>
  );
};

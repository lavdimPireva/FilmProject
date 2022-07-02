import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";
import { CardComponent } from "../../components/CardComponent/CardComponent";

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
        .get(`${process.env.REACT_APP_JSON_PLACEHOLDER_API}/posts`, {
          params: {
            _limit: 50,
          },
        })
        .then((res) => res.data),
    {
      // refetchOnMount: false,
      // cacheTime: 0,
      // keepPreviousData: false,
      // enable:
    }
  );

  console.log("development", process.env.REACT_APP_JSON_PLACEHOLDER_API);

  console.log({ isLoading, error, data, isFetching });

  return (
    <>
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translateY(-50%)",
          }}
        >
          {" "}
          <CircularProgress />
        </div>
      )}

      {isError && <div>Posts couldn't be loaded</div>}

      {data && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            rowGap: 30,
            columnGap: 40,
          }}
        >
          {data.map((item) => (
            <CardComponent key={item.id} title={item.title} body={item.body} />
          ))}
        </div>
      )}
    </>
  );
};

export default Posts;

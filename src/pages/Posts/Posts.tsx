import { CircularProgress } from "@mui/material";
import { usePosts } from "../../api/hooks/usePosts";
import { CardComponent } from "../../components/CardComponent/CardComponent";

const Posts = () => {
  const { isLoading, isError, error, data, isFetching } = usePosts();

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

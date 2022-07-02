import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";
import { CardComponent } from "../../components/CardComponent/CardComponent";

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const fetchComments = async () => {
  const res = await axios
    .get(`${process.env.REACT_APP_JSON_PLACEHOLDER_API}/comments`)
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

      {isError && <div>Comments couldn't be loaded</div>}

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
            <CardComponent key={item.id} title={item.email} body={item.body} />
          ))}
        </div>
      )}
    </>
  );
};

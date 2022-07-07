import { CircularProgress } from "@mui/material";
import { useComment } from "../../api/hooks/useComment";
import { CardComponent } from "../../components/CardComponent/CardComponent";

export const Comments = () => {
  const { isLoading, isError, data } = useComment();

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

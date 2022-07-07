import { CircularProgress } from "@mui/material";
import { usePhotos } from "../../api/hooks/usePhotos";
import { CardComponent } from "../../components/CardComponent/CardComponent";

export const Photos = () => {
  const { isLoading, isError, data } = usePhotos();

  console.log({ isLoading, isError, data });

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
            <CardComponent
              key={item.id}
              title={item.title}
              body={item.thumbnailUrl}
              thumbnailUrl={item.thumbnailUrl}
            />
          ))}
        </div>
      )}
    </>
  );
};

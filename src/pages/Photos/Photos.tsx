import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";
import { CardComponent } from "../../components/CardComponent/CardComponent";

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const fetchPhotos = async () => {
  return axios
    .get(`${process.env.REACT_APP_JSON_PLACEHOLDER_API}/photos`, {
      params: {
        _limit: 50,
      },
    })
    .then((res) => res.data);
};

export const Photos = () => {
  const { isLoading, isError, data } = useQuery<Photo[]>("photos", fetchPhotos);

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

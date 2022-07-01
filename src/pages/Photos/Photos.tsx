import axios from "axios";
import { useQuery } from "react-query";

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const fetchPhotos = async () => {
  const res = await axios
    .get("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.data);
  return res;
};

export const Photos = () => {
  const { isLoading, isError, data } = useQuery<Photo[]>("photos", fetchPhotos);

  console.log({ isLoading, isError, data });

  return (
    <>
      {isLoading && <div>Loading posts...</div>}

      {isError && <div>Comments couldn't be loaded</div>}

      {data && (
        <div>
          {data.map((item) => (
            <img src={item.thumbnailUrl} alt={item.title} />
          ))}
        </div>
      )}
    </>
  );
};

import { CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";
import { Outlet } from "react-router-dom";
import { CardComponent } from "../../components/CardComponent/CardComponent";

interface Movie {
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  backdrop_path: string;
}

const baseUrl = "https://image.tmdb.org/t/p/original/";

const fetchMovies = async () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`
    )
    .then((res) => res.data.results);
};

export const MyMovies = () => {
  const { isLoading, isError, data } = useQuery<Movie[]>("movies", fetchMovies);

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
        <>
          <Typography
            sx={{ textAlign: "center" }}
            color="textPrimary"
            gutterBottom
            variant="h4"
          >
            My Movies
          </Typography>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              rowGap: 30,
              columnGap: 40,
              padding: 5,
              margin: 33,
            }}
          >
            {data?.map((item) => (
              <CardComponent
                key={item.id}
                title={item.original_title}
                body={item.overview}
                thumbnailUrl={`${baseUrl}${item.poster_path}`}
              />
            ))}
          </div>
          <Outlet />
        </>
      )}
    </>
  );
};

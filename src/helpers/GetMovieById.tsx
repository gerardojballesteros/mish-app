import { useApi } from "../hooks/useApi";

export const GetMovieById = ( id: any ) => {
  const { getDetails } = useApi();

  return getDetails?.find((movie: any)=> movie.id === id);

}

import { PopularMovie } from "../types/PopularMovie"

export const FunctionList = (arr: any) => {

    const arr2 = (arr?.results as PopularMovie[])?.map(movie=>{
        return{
            id: movie.id,
            adult: movie.adult,
            backdrop_path: movie.backdrop_path,
            genre_ids: movie.genre_ids,
            original_language: movie.original_language,
            original_title: movie.original_title,
            overview: movie.overview,
            popularity: movie.popularity,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
            title: movie.title,
            video: movie.video,
            vote_average: movie.vote_average,
            vote_count: movie.vote_count,
          }
    })

  return  arr2 
}

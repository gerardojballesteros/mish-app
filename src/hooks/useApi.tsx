import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PopularMovie } from "../types/PopularMovie"
import { FunctionList } from "./FunctionListApi"

export const useApi = () => {

    const [popular, setPopular] = useState<PopularMovie[]>([])
    const [upcoming, setUpcoming] = useState<PopularMovie[]>([])
    const [nowPlaying, setNowPlaying] = useState<PopularMovie[]>([])
    const [getDetails, setGetDetails] = useState<any>([])
    const [isLoadingList, setIsLoadingList] = useState<boolean>(true)
    
    const { id } = useParams();
    const number: any = Number(id)

    useEffect(() => {
        getPopular()
        getUpcoming()
        getNowPlaying()
        getNowDetails()
    },[number])

    const getPopular = async () => {
        setIsLoadingList(true)
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=83ba2946f90777e8d79b338bbf7d4a37&language=es-ES`)
        const data: any = await response.json()
        setPopular(FunctionList(data))
    }

    const getUpcoming = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=83ba2946f90777e8d79b338bbf7d4a37&language=es-ES`)
        const data: any = await response.json()
        setUpcoming(FunctionList(data))
    }

    const getNowPlaying = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=83ba2946f90777e8d79b338bbf7d4a37&language=es-ES`)
        const data: any = await response.json()
        setNowPlaying(FunctionList(data))
    }
    
    const getNowDetails = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${number ? number : 507086}?api_key=83ba2946f90777e8d79b338bbf7d4a37&language=es-ES`)
        const data = await response.json();
        const res = [data]
        setGetDetails(res)
    }

    return { popular, upcoming, nowPlaying, getDetails, isLoadingList };
}

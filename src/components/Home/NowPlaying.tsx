import { useApi } from "../../hooks/useApi";
import { Bg, Description, Title, PopularScreen, Overview } from '../../styles/Home/PopularScreen';
import { Button } from '../../styles/Button/Button';
import moment from 'moment';
import LazyLoad from 'react-lazyload';
import { Link } from "react-router-dom";
export const NowPlaying = () => {

  const { nowPlaying } = useApi();
    
  return (
    
      <>
     
        {!nowPlaying ? null : nowPlaying?.slice(4, 5).map(({title, release_date, backdrop_path, overview, id}, index) => {
          const fecha: any = release_date;
          return(
            <LazyLoad key={index} height={200}>
                <PopularScreen className="banner-bottom" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path})`}} key={index}>
                <Bg />
                <Description>
                <h1 className="now-title">En cartelera hoy.</h1>
                    <Title>{title}<p>({moment(fecha).format('YYYY')})</p></Title>
                    <Overview>{overview}</Overview>
                    <Link to={`/movie/${id}`} >
                      <Button>Ver más</Button>
                    </Link>
                </Description>
                </PopularScreen>
            </LazyLoad>
          )
        })}
      </>
  
  )
}

    
   


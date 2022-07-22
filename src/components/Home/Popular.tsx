import { useApi } from "../../hooks/useApi";
import { Bg, Description, Title, PopularScreen, Overview } from '../../styles/Home/PopularScreen';
import { Button } from '../../styles/Button/Button';
import { Link } from "react-router-dom";
import moment from 'moment';
import LazyLoad from 'react-lazyload';


export const Popular = () => {

  const { popular } = useApi();

  return (
      <>
        {!popular ? null : popular?.slice(0, 1).map(({title, release_date, backdrop_path, overview, id}, index:any) => {
          const fecha: any = release_date;
          return(
            <LazyLoad key={index} data-aos="fade-in" height={200}>
              <PopularScreen  style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path})`}} key={index}>
                <Bg />
                <Description>
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

    
   


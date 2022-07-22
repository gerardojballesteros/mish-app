import { List, Card, Title, Average } from '../../styles/components/List';
import { useApi } from '../../hooks/useApi';
import { Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import  responsive  from './obj/Carousel';


export const UpcomingList = () => {

  const { upcoming } = useApi()

  return (
    <List className="animate__animated animate__fadeIn animate__delay-1s">
        <h1>Próximamente</h1>
        <Carousel partialVisible={true} responsive={responsive}>
        {!upcoming ? null : upcoming?.map(({title, vote_average, poster_path, id}, index) => {
          return(
            <Card key={index}>
                <div className="card-content">
                    <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`} alt="" />
                    <Average>
                      <>
                        <i className="fas fa-star animate__animated animate__pulse animate__infinite"></i>
                        {vote_average}
                      </>
                    </Average>
                    <Title>{title}</Title>
                    <div className="link-details">
                      <Link to={`/movie/${id}`}>Ver más</Link>
                    </div>
                </div>
            </Card>
          )
        })}
        </Carousel>
    </List>
  )
}
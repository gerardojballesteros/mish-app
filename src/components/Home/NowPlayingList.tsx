import { List, Card, Title, Average } from '../../styles/components/List';
import { useApi } from '../../hooks/useApi';
import { Link } from 'react-router-dom';
import  responsive  from './obj/Carousel';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';


export const NowPlayingList = () => {

    const { nowPlaying } = useApi()

  return (
    <List className="list-up">
        <h1>En cartelera hoy</h1>
        <Carousel partialVisible={true} responsive={responsive}>
        {!nowPlaying ? null : nowPlaying?.map(({title, vote_average, poster_path, id}, index) => {
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

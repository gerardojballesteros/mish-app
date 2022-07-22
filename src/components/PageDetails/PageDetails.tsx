import { useParams } from 'react-router-dom'
import { GetMovieById } from '../../helpers/GetMovieById';
import { 
  ImagePoster, 
  Page, 
  Bg, 
  Description, 
  ImageFront, 
  BoxOne, 
  TextContent, 
  Average,
  TextDescription,
  Production,
  BoxTwo,
  ImagesOther,
  TextState,
  Items } from '../../styles/PageDetails/PageDetailsStyle';
import moment from 'moment';

export const PageDetails = () => {

    const { id } = useParams();
    const number = Number(id)
    const movie: any = GetMovieById(number);
    const budget = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(movie?.budget);
    const revenue = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(movie?.revenue);
    
  return (
    <Page>
      <ImagePoster src={movie?.backdrop_path === undefined ? ('') : (`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie?.backdrop_path}`)}/>
      <Bg></Bg>
      <Description>
        <BoxOne>
          <ImageFront src={movie?.poster_path === undefined ? ('') : (`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie?.poster_path}`)} />
          <TextContent>
            <h1>{movie?.title} ({moment(movie?.release_date).format('YYYY')})</h1>
            <div className="date-categories">
              <div className="date-time">
                <p>{moment(movie?.release_date).format('DD-MM-YYYY')} </p>
                <p>{movie?.production_countries[0].iso_3166_1}</p>
              </div>
                <i className="fas fa-circle"></i>
              <div className="tags">
                {movie?.genres?.map((id: any, index: any)=>{return( <div key={index}  ><p className="categories">{id.name}</p></div> )})}
              </div>
              <i className="fas fa-circle"></i>
              <p>Duración: {movie?.runtime} min</p>
            </div>
            <Average>
              <div className="circle">
                <p>{movie?.vote_average}</p>
                <i className="fas fa-star"></i>
              </div>
              <p className="title-average">Puntuación de usuarios</p>
            </Average>
            <TextDescription>
              <p>{movie?.overview}</p>
            </TextDescription>
            <Production>
              <h3>Producción</h3>
              <div>{movie?.production_companies?.map((id: any, index: any)=>{return( <div key={index}><p>{id.name}</p> </div> )})}</div>
            </Production>
          </TextContent>
        </BoxOne>
        <BoxTwo>
            <TextState>
              <Items>
                <li>
                  <h3>Estado</h3>
                  <p>{movie?.status}</p>
                </li>
                <li>
                  <h3>Pais</h3>
                  <p>{movie?.production_countries[0].name}</p>
                </li>
                <li>
                  <h3>Idioma Original</h3>
                  <p>{movie?.spoken_languages[0].name}</p>
                </li>
                <li>
                  <h3>Presupuesto</h3>
                  <p>{budget} USD</p>
                </li>
                <li>
                  <h3>Ingresos</h3>
                  <p>{revenue} USD</p>
                </li>
              </Items>
            </TextState>
            <ImagesOther>
              {movie?.belongs_to_collection?.poster_path === undefined ? ( null ) : ( <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie?.belongs_to_collection?.poster_path}`} /> )}
              {movie?.belongs_to_collection?.backdrop_path === undefined ? ( null ) : ( <img src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie?.belongs_to_collection?.backdrop_path}`}alt="" /> )}
              {movie?.backdrop_path === undefined ? ( null ) : ( <img src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie?.backdrop_path}`} alt="" /> )}
            </ImagesOther>
        </BoxTwo>
      </Description>
    </Page>
  )
}

import { useApi } from "../../../hooks/useApi"
import { Average, Card, List, Title } from "../../../styles/components/List"


export const MovieList = () => {

    const { popular } = useApi()

  return (
    <List className="animate__animated animate__fadeIn animate__delay-1s">
        <h1>Próximamente</h1>
       
        {!popular ? null : popular?.map(({title, vote_average, poster_path}, index) => {
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
                </div>
            </Card>
          )
        })}
    </List>
  )
}

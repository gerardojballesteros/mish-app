import { Page } from "../../styles/PageList/PageListStyle"
import { Filter } from "./components/Filter"
import { MovieList } from "./components/MovieList"



export const PageList = () => {
  return (
    <Page>
      <Filter />
      <MovieList />
    </Page>
  )
}

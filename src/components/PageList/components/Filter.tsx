import { ButtonGender } from "../../../styles/Button/Button"
import { FilterContent, Gender } from "../../../styles/PageList/PageListStyle"
import { ObjFilter } from "./ObjFilter"


export const Filter = () => {
  return (
    <FilterContent>
        <h1>Filtrar</h1>
        <Gender>
            <p>Géneros</p>
            <ul>
                {ObjFilter?.map((id, index)=>{
                    return(
                        <li key={index}>
                            <ButtonGender>{id.gender}</ButtonGender>
                        </li>
                    )
                })}
            </ul>
        </Gender>
    </FilterContent>
  )
}

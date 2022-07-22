import { Link } from "react-router-dom"
import { MyHeader, HeaderTitle, Nav } from "../../styles/HeaderStyle"

export const Header = () => {

  window.addEventListener("scroll", () => {
    if (window.scrollY < 1) {
      document.querySelector<any>("header").classList.remove("backdrop");
    } else {
      document.querySelector<any>("header").classList.add("backdrop");
    }
  });

  return (
    <MyHeader>
      <HeaderTitle>
        <Link to="/">Mish.</Link>
      </HeaderTitle>
      <Nav>
        <li>
          <a href="https://www.themoviedb.org/documentation/api" target="_blank">Documentación</a>
        </li>
        <li>
          <a href="https://github.com/gerardojballesteros/mish-app" target="_blank">
            <i className="fab fa-github" ></i>
          </a>
        </li>
      </Nav>
    </MyHeader>
  )
}

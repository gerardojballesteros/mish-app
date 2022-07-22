import { FooterContent } from '../../styles/Footer/FooterStyle'
import moment from 'moment'

export const Footer = () => {

    const date = new Date()

  return (
    <FooterContent>
        <p>Copyright © {moment(date).format('YYYY')} | Mish App, realizado por <a id="link-footer" href="https://www.gerardoballesteros.com" target="_blank" rel="noopener noreferrer">Gerardo Ballesteros</a></p>
        <p>Más información <a id="link-footer" href="https://www.themoviedb.org/documentation/api" target="_blank" rel="noopener noreferrer">themoviedb.org</a></p>
    </FooterContent>
  )
}

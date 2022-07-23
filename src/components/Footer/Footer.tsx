import { FooterContent } from '../../styles/Footer/FooterStyle'
import moment from 'moment'

export const Footer = () => {

    const date = new Date()

  return (
    <FooterContent>
        <p>Copyright © {moment(date).format('YYYY')} | Mish App, realizado por <a id="link-footer" href="https://www.gerardoballesteros.com" target="_blank" rel="noopener noreferrer">Gerardo Ballesteros</a></p>
        <p>Más información <a id="link-footer" href="https://www.themoviedb.org/documentation/api" target="_blank" rel="noopener noreferrer"><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" /></a></p>
    </FooterContent>
  )
}

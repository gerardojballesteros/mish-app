import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { AppRouter } from "./routes/AppRouter"


export const Mish = () => {
  return (
    <>
      <Header />
      <AppRouter/>
      <Footer />
    </>
  )
}

import {
  Routes,
  Route,
} from "react-router-dom";
import { PageDetails } from "../components/PageDetails/PageDetails";
import { HomeScreen } from "../view/HomeScreen";


export const AppRouter = () => {
  return (
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/movie/:id" element={<PageDetails/>} />
            <Route path="*" element={<HomeScreen />} />
        </Routes>
  )
}

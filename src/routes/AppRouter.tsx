import {
  Routes,
  Route,
} from "react-router-dom";
import { PageDetails } from "../components/PageDetails/PageDetails";
import { HomeScreen } from "../view/HomeScreen";
import { PageListScreen } from "../view/PageListScreen";


export const AppRouter = () => {
  return (
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/page-list" element={<PageListScreen />} />
            <Route path="/movie/:id" element={<PageDetails/>} />
            <Route path="*" element={<HomeScreen />} />
        </Routes>
  )
}

import { createBrowserRouter } from"react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";


const router = createBrowserRouter([
    {
        path:"/",
        elememt: <MainPage></MainPage>
    },
    {
        path: "/about",
        element: <AboutPage></AboutPage>
    }
])
const { createBrowserRouter } = require("react-router-dom");
const { default: MainPage } = require("../pages/MainPage");



const router = createBrowserRouter([
    {
        path:"/",
        elememt: <MainPage></MainPage>
    }
])
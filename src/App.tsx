import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Users from "./pages/users/Users";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import Calendar from "./pages/calendar/Calendar";
import Note from "./pages/notes/Note";
import User from "./pages/user/User";

function App() {

  const Layout = () =>{
    return(
      <div className="main">
       <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/users",
        element:<Users/>,
      },
      {
        path:"/profile",
        element:<Profile/>,
      },
      {
        path:"/users/:id",
        element:<User/>,
      },
      {
        path:"/note",
        element:<Note/>,
      },
      {
        path:"/calendar",
        element:<Calendar/>,
      },

      ]
    },
    {
      path:"/login",
      element:<Login/>
    },
  ]);

  return <RouterProvider router={router}/>
}

export default App;

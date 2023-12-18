  import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/Login/Login";
import "./styles/global.scss"
import SingleProduct from "./pages/singleproduct/SingleProduct";
import SingleUser from "./pages/singleuser/SingleUser";
function App() {

  const Layout = ()=>{
    return(
      <div className="main">  
        <Navbar/>
        <div className="container">
          <div className="menuC">
            <Menu/>
          </div>
          <div className="contentC">
          <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      // berkant
     path:"/",
     element: <Layout/>,
     children:[
    {
      path:"/",
      element:<Home/>
    },  
    {
      path:"/users",
      element:<Users/>
    },
    {
      path:"/products",
      element:<Products/>
    },
    {
      path:"/users/:id",
      element:<SingleUser/>
    },
    {
      path:"/products/:id",
      element:<SingleProduct/>
    },     
    ],
    },
    {
      path:"/login",
      element:<Login/>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;

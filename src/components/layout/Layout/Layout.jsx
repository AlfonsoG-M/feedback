import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <div style={{minHeight: "calc(100vh - 56px - 75px)"}}>
        <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout
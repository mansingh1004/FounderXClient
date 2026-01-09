import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import HeroSection from "./pages/HeroSection";
import Footer from "./Components/Footer";

const Layout=()=>{
    return(
        <>

        <Header/>
        <Outlet/>
        {/* <HeroSection/> */}
        <Footer/>
        
        
        </>
    )
}
export default Layout;
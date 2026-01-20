import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import HeroSection from "./pages/HeroSection";
import Footer from "./Components/Footer";
import StatsSection from "./pages/StateSection";

const Layout=()=>{
    return(
        <>

        <Header/>
        <Outlet/>
        {/* <HeroSection/> */}
        <StatsSection/>
        <Footer/>
        
        
        </>
    )
}
export default Layout;
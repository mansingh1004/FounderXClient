import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import HeroSection from "./pages/HeroSection";
import Footer from "./Components/Footer";
import StatsSection from "./pages/StateSection";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs"
import FAQSection from "./pages/FAQSection"
import Testimonials from "./pages/Testimonials"
const Layout=()=>{
    return(
        <>

        <Header/>
        <Outlet/>
        {/* <HeroSection/> */}
        <Testimonials/>
        <StatsSection/>
        <AboutUs/>
        <ContactUs/>
        <FAQSection/>
        <Footer/>
        
        
        </>
    )
}
export default Layout;
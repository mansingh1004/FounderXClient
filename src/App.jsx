import { BrowserRouter, Route, Routes }  from "react-router-dom";
import Layout from "./Layout";
import Header from "./Components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Profile from "./pages/Profile";

import Login from "./pages/Login";
import Registration from "./pages/Registration"
import Founder from"./pages/Founder";
import HeroSection from "./pages/HeroSection";   
import InvestorProfile from "./pages/InvestorProfile";
import SpecialistProfile from "./pages/SpecialistProfile";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import NetworkGraph from "./pages/NetworkGraph";
import  Features  from "./pages/Features"
import Testimonials from "./pages/Testimonials";
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"

// import Profile from "./pages/Profile"

const App=()=>{
  return(
    <>
           

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="header" element={<Header/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="herosection" element={<HeroSection/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="features" element={<Features/>}/>
      <Route path="aboutus" element={<AboutUs/>}/>
      <Route path="contactus" element={<ContactUs/>}/>
      <Route path="registration" element={<Registration/>}/> 
      <Route path="founder" element={<Founder/>}/>  
      <Route path="testimonials"  element={<Testimonials/>}/>
      <Route path="investorprofile"  element={<InvestorProfile/>}/>
       <Route path="specialistprofile" element={<SpecialistProfile/>}/>
       <Route path="forgotpassword" element={<ForgotPassword/>}/>
<Route path="resetpassword/:token" element={<ResetPassword />} />
<Route path="networkgraph"  element={<NetworkGraph/>}/>




      </Route>
    </Routes>
      
    </BrowserRouter>
    
        <ToastContainer position="top-center" autoClose={3000} />
    </>
  )
}


export default App;
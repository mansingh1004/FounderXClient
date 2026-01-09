import { BrowserRouter, Route, Routes }  from "react-router-dom";
import Layout from "./Layout";
import Header from "./Components/Header";
import Login from "./pages/Login";
import Registration from "./pages/Registration"
import Founder from"./pages/Founder";
import HeroSection from "./pages/HeroSection";   
import InvestorProfile from "./pages/InvestorProfile";
import SpecialistProfile from "./pages/SpecialistProfile";
const App=()=>{
  return(
    <>
           

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<HeroSection/>}/>
      <Route path="header" element={<Header/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="registration" element={<Registration/>}/>
      <Route path="founder" element={<Founder/>}/>
      <Route path="investorprofile"  element={<InvestorProfile/>}/>
     <Route path="specialistprofile" element={<SpecialistProfile/>}/>




      </Route>
    </Routes>
      
    </BrowserRouter>
    
    
    </>
  )
}


export default App;
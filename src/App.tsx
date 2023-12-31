import React, { useEffect, useState } from "react";
import Navbar from "./scenes/navbar/Navbar";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home/Home";
import Benefits from "./scenes/benefits/Benefits";
import OurClasses from "./ourClasses/OurClasses";
import ContactUs from "./scenes/contactus/ContactUs";
import Footer from "./scenes/Footer/Footer";

function App() {
  const[selectedPage,setSelectedPage]=useState<SelectedPage>(SelectedPage.Home); //type enum selescted page
  const[isTopOfPage,setIsTopOfPage]=useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="App bg-gray-20" >
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage={isTopOfPage} />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  );
}

export default App;

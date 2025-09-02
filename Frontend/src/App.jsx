import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OneSignal from "react-onesignal";   // ✅ OneSignal import

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import DigitalMarketing from "./Pages/DigitalMarketing";
import WebDevelopment from "./Pages/WebDevelopment";
import WebDesign from "./Pages/WebDesign";
import Innovations from "./Pages/Innovations";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import DigitalMarketingPricing from "./Pages/DigitalMarketingPricing";
import WebDesignPricing from "./Pages/WebDesignPricing";
import WebDevelopmentPricing from "./Pages/WebDevelopmentPricing";
import OurServices from "./Pages/OurServices";
import Pricing from "./Pages/Pricing";

function App() {
  // 🔔 OneSignal init fix
  useEffect(() => {
    if (!window.OneSignalInitialized) {
      OneSignal.init({
        appId: "2d204cb0-005d-4339-8b65-4b618df6b9ab", // 👈 tumhara App ID
        notifyButton: { enable: true },
      });
      window.OneSignalInitialized = true; // ✅ init ek hi baar hoga
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/web-design" element={<WebDesign />} />
        <Route path="/Innovations" element={<Innovations />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/DigitalMarketingPricing" element={<DigitalMarketingPricing />} />
        <Route path="/WebDesignPricing" element={<WebDesignPricing />} />
        <Route path="/WebDevelopmentPricing" element={<WebDevelopmentPricing />} />
        <Route path="/OurServices" element={<OurServices />} />
        <Route path="/Pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

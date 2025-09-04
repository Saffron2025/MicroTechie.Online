import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";   // ✅ Router hata diya
import OneSignal from "react-onesignal";

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
  // 🔔 OneSignal init
  useEffect(() => {
    if (!window.OneSignalInitialized) {
      OneSignal.init({
        appId: "2d204cb0-005d-4339-8b65-4b618df6b9ab",
        notifyButton: { enable: true },
      });
      window.OneSignalInitialized = true;
    }
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/web-design" element={<WebDesign />} />
        <Route path="/innovations" element={<Innovations />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/digital-marketing-pricing" element={<DigitalMarketingPricing />} />
        <Route path="/web-design-pricing" element={<WebDesignPricing />} />
        <Route path="/web-development-pricing" element={<WebDevelopmentPricing />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

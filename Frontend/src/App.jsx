import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import OneSignal from "react-onesignal";

import MainLayout from "./Layouts/MainLayout";

import Home from "./Pages/Home";
import DigitalMarketing from "./Pages/DigitalMarketing";
import WebDevelopment from "./Pages/WebDevelopment";
import WebDesign from "./Pages/WebDesign";
import Innovations from "./Pages/Innovations";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import DigitalMarketingPricing from "./Pages/DigitalMarketingPricing";
import WebDesignPricing from "./Pages/WebDesignPricing";
import WebDevelopmentPricing from "./Pages/WebDevelopmentPricing";
import OurServices from "./Pages/OurServices";
import Pricing from "./Pages/Pricing";
import WebOffer from "./Pages/WebOffer";

function App() {
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
    <Routes>

      {/* 🔹 NORMAL WEBSITE PAGES */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      <Route path="/digital-marketing" element={<MainLayout><DigitalMarketing /></MainLayout>} />
      <Route path="/web-development" element={<MainLayout><WebDevelopment /></MainLayout>} />
      <Route path="/web-design" element={<MainLayout><WebDesign /></MainLayout>} />
      <Route path="/innovations" element={<MainLayout><Innovations /></MainLayout>} />
      <Route path="/about" element={<MainLayout><About /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
      <Route path="/DigitalMarketingPricing" element={<MainLayout><DigitalMarketingPricing /></MainLayout>} />
      <Route path="/WebDesignPricing" element={<MainLayout><WebDesignPricing /></MainLayout>} />
      <Route path="/WebDevelopmentPricing" element={<MainLayout><WebDevelopmentPricing /></MainLayout>} />
      <Route path="/our-services" element={<MainLayout><OurServices /></MainLayout>} />
      <Route path="/pricing" element={<MainLayout><Pricing /></MainLayout>} />

      {/* 🔥 LANDING PAGE (NO NAVBAR / NO FOOTER) */}
      <Route path="/web-design-offer" element={<WebOffer />} />

    </Routes>
  );
}

export default App;

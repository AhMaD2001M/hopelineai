import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BlogSlider from "./components/BlogSlider";
import Footer from "./components/Footer";
import LiveConsultancy from "./components/LiveConsultancy";
import AwarenessCampaigns from "./components/AwarenessCampaigns";
import Rehabilitation from "./components/Rehabilitation";
import StudentSociety from "./components/StudentSociety";
import EmergencyReport from "./components/EmergencyReport";
import AwarenessSession from "./components/AwarenessSession";
import ContactUsForm from "./components/ContactUsForm";

export default function App() {
  return (
    <Router>
      {/* Navbar is common for all routes */}
      <Navbar />

      {/* Routes for different pages */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <BlogSlider />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/consultancy" element={<LiveConsultancy />} />
        <Route path="/campaigns" element={<AwarenessCampaigns />} />
        <Route path="/rehabilitation" element={<Rehabilitation />} />
        <Route path="/student" element={<StudentSociety />} />
        <Route path="/emergency" element={<EmergencyReport />} />
        <Route path="/awareness-session" element={<AwarenessSession />} />
        <Route path="/contactus" element={<ContactUsForm />} />
      </Routes>

      {/* Footer is common for all routes */}
      <Footer />
    </Router>
  );
}

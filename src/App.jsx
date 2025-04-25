import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Call } from "./assets/icons/Icons";

// Lazy loading components
// const Navbar = lazy(() => import('./components/Navbar'));
// const Footer = lazy(() => import('./components/Footer'));
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const BusinessSetup = lazy(() => import("./Pages/Businesssetup"));
const VisaServices = lazy(() => import("./Pages/VisaServices"));
const ProServices = lazy(() => import("./Pages/ProServices"));
const Contact = lazy(() => import("./Pages/Contact"));
const Trademark = lazy(() => import("./Pages/TradeMark"));
const Certification = lazy(() => import("./Pages/Certification"));

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen bg-white">
              <div className="w-12 h-12 border-4 border-t-transparent border-red-600 rounded-full animate-spin"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/businesssetup" element={<BusinessSetup />} />
            <Route path="/visaservice" element={<VisaServices />} />
            <Route path="/proservice" element={<ProServices />} />
            <Route path="/trademark" element={<Trademark />} />
            <Route path="/certification" element={<Certification />} />
          </Routes>
        </Suspense>
        <Footer />
        <div className="fixed bottom-[20px] right-[20px] z-10 flex flex-col gap-4">
          {/* WhatsApp Chat */}
          <a
            aria-label="Chat on WhatsApp 1"
            href="https://wa.me/971564100504"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Chat on WhatsApp"
              src="/Whatsapp.png"
              style={{ width: "50px", height: "50px" }}
            />
          </a>
          <button
            aria-label="Call Button"
            onClick={() => {
              if (navigator.userAgent.toLowerCase().includes("mobi")) {
                // Mobile: Initiate a call
                window.location.href = "tel:+971545390080";
              } else {
                // Desktop: Copy to clipboard
                navigator.clipboard.writeText("+971 54 539 0080");
                alert("Phone number copied to clipboard!");
              }
            }}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#25d366", // WhatsApp green for consistency
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Call color={"white"} />
          </button>
        </div>
      </Router>
    </>
  );
}

export default App;

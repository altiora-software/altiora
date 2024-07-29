import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import ServiceCarousel from "../components/carrousel";
import Beneficios from "./beneficios";
import Nosotros from "./nosotros";
import Contact from "./contact";
import { Element } from "react-scroll";
import HeroGrid from "../components/hero-grid";
import Services from "../components/services";
import gifLoader from "../public/img-logo/AltioraSlogan.png";
import Image from "next/image";
import Topbar from "../components/Topbar";
import ReactGA from "react-ga";

const Home = () => {
  const TRACKING_ID = "YOUR_TRACKING_ID"; // Reemplaza con tu ID de Google Analytics
  ReactGA.initialize(TRACKING_ID);

  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Contacto", href: "/contact" },
    { name: "Nosotros", href: "/nosotros" },
  ];

  useEffect(() => {
    const hasLoaded = localStorage.getItem("hasLoaded");
    if (hasLoaded) {
      setIsLoading(false);
    } else {
      const timer = setInterval(() => {
        if (progress < 100) {
          setProgress((prevProgress) => prevProgress + 1);
        } else {
          clearInterval(timer);
          setCompleted(true);
          setTimeout(() => {
            setIsLoading(false);
            localStorage.setItem("hasLoaded", "true");
          }, 2000);
        }
      }, 20);

      return () => clearInterval(timer);
    }
  }, [progress]);

  return (
    <>
      <Head>
        <title>Altiora Software</title>
        <meta name="description" content="landing" />
        <link rel="icon" href="/img-logo/Altiora.ico" />
      </Head>

      {isLoading ? (
        <div className="loading-screen">
          <div className="loading-content">
            <Image
              src={gifLoader}
              alt="Cargando..."
              width={400}
              height={400}
              className="Loading-image"
            />
            <div className="loading-bar-container">
              <div
                className="loading-bar"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="loading-counter">{progress}%</div>
          </div>
        </div>
      ) : (
        <div>
          <Element name="Inicio">
            <Navbar links={links} />
          </Element>
          <HeroGrid />
          <Element name="Servicios" className="h-24"></Element>
          <Services />
          <Element name="Contacto" className="h-24"></Element>
          <Contact />
          <Element name="Nosotros" className="h-24"></Element>
          <Nosotros />
          <Footer />
          <PopupWidget />
        </div>
      )}
    </>
  );
};

export default Home;

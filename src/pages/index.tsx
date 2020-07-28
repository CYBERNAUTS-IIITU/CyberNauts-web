import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Tech from "../components/Tech";
import Footer from "../components/shared/Footer";
import Layout from "../components/Layout";
import Events from "../components/Events";
import Contact from "../components/Contact";
// import Layout from "../components/layout";

const App = () => {
  return (
      <Layout>
        <>
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Events />
        <Contact />
        <Footer />
        </>
      </Layout>
  )
};

export default App;

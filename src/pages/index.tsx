import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Tech from "../components/Tech";
import Footer from "../components/shared/Footer";
import Layout from "../components/Layout";
// import Layout from "../components/layout";

const App = () => {
  return (
      <Layout>
        <>
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Footer />
        </>
      </Layout>
  )
};

export default App;

import React from "react";
import Header from "./components/header/Header";
import SectionOne from "./components/sections/SectionOne";
import SectionSecond from "./components/sections/SectionSecond";
import SectionThird from "./components/sections/SectionThird";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <SectionOne />
        <SectionSecond />
        <SectionThird />
        <Footer />
      </div>
    </>
  );
}

export default App;

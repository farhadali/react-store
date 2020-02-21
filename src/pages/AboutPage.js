import React from "react";
import Info from "../components/AboutPage/Info";
import Hero from "../components/Hero";
import aboutBcg from "../images/aboutBcg.jpeg";
import Products from './ProductsPage'
export default function AboutPage(props) {
  console.log(props)
  return (
    <>
      <Hero img={aboutBcg} />
     
      <Info />
    </>
  );
}

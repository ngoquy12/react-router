import React from "react";
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  console.log(location);

  return <div></div>;
}

export default About;

import React from "react";
import Introduction from "./Introduction";
import TheOrchardProject from "./TheOrchardProject";
import WebPortfolioProject from "./WebPortfolioProject";
import LudumDare42 from "./LudumDare42";
import SurveyFormProject from "./SurveyFormProject";
import Shenanijam2 from "./Shenanijam2";
import BookViewer from "./BookViewer";


const blogs = 
[
  {title:"Introduction",
  keywords:"default introduction greeting interests",
  content:<Introduction />},

  {title:"Book Viewer App",
  keywords:"book viewer app project CSS web development HTML design flex grid 2018 october react.js react javascript codepen",
  content:<BookViewer />},

  {title:"The Orchard Project",
  keywords:"the orchard project CSS web development HTML design flex box grid 2018 august september",
  content:<TheOrchardProject />},

  {title:"Portfolio Website Project",
  keywords:"portfolio website project CSS web development HTML javascript design react webpack npm",
  content:<WebPortfolioProject />},

  {title:"Running out of Space",
  keywords:"ludum dare 42 running out of space gamemakerstudio2 vector art video game programming isometric action rougelike",
  content:<LudumDare42 />},

  {title:"Project Survey Form",
  keywords:"freecodecamp project survay form css flexbox grid html web development design league of legends",
  content:<SurveyFormProject />},

  {title:"Slime Crafting",
  keywords:"shenanijam 2 game jam gamemaker studio aseprite pixel art video game programming top down action crafting",
  content:<Shenanijam2 />},

  
]

export default blogs;

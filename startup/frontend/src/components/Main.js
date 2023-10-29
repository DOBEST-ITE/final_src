import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import mainPh1 from '../image/main1.jpg';
import mainPh2 from '../image/main2.jpg';
import mainPh3 from '../image/main3.jpg';
import mainPh4 from '../image/main4.jpg';



const Main = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false);
  
    const handleToggleOpen = () => {
      setIsToggleOpen(!isToggleOpen);
    };
    return (
     
      <div>
         <div className="main_line"/>
         <div className="main_line1"/>
         <div className="main_line2"/>
         <div className="main_line3"/>
         <div className="main_line4"/>
         
         <img src={mainPh1} className="main_ph1"/>
         <div className="main_text1">THE</div>
         <div className="main_text2">HANDSOME</div>
         <img src={mainPh2} className="main_ph2"/>
         <img src={mainPh4} className="main_ph4"/>
         
      </div>
    
    );
  };
  
  export default Main;
  
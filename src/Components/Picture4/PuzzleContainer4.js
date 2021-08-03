import React from 'react'
import { NavLink } from 'react-router-dom';
import OriginalPicture4 from './OriginalPicture4';
import DifferentPicture4 from './DifferentPicture4';

export default function PuzzleContainer() {

  return (
    <>
        <div className="mainLogo">
    {/* <b>Ditto.</b> <br/> */}
    </div>

    <nav>
        <NavLink to={"/Differently"} className="returnHome">𝗥 𝗘 𝗧 𝗨 𝗥 𝗡 𝗧 𝗢 𝗚 𝗔 𝗟 𝗟 𝗘 𝗥 𝗬</NavLink>
    </nav>
    {/* <div className="mainLogo"> */}
    {/* <b>Ditto.</b> <br/> */}
    {/* </div> */}
    <div className="mainLogoRight">
    <form className = "myform">
     <input className="myFormField" type = "text" name = "stage" size = "20" readOnly="read-only" defaultValue="Find The Difference"/>
  </form>
    </div>
    <div><center><OriginalPicture4 /></center></div>
    <div><center><DifferentPicture4 /></center></div>        
</>  )
}

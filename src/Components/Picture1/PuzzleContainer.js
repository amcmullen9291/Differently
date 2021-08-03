import React from 'react'
import { NavLink } from 'react-router-dom';
import OriginalPicture from './OriginalPicture';
import DifferentPicture from './DifferentPicture';

export default function PuzzleContainer() {

  return (
    <>
    <nav>
        <NavLink to={"/Differently"} className="returnHome">𝗥 𝗘 𝗧 𝗨 𝗥 𝗡 𝗧 𝗢 𝗚 𝗔 𝗟 𝗟 𝗘 𝗥 𝗬</NavLink>
    </nav>
    <div className="mainLogo">
    <b>Ditto.</b> <br/>

    <div id="Counter">
      
    </div>
    </div>
    <div className="mainLogoRight">
    <form className = "myform">
     <input className="myFormField" type = "text" name = "stage" size = "20" readOnly="read-only" defaultValue="Find The Difference"/>
  </form>
    </div>
    <div><center><OriginalPicture /></center></div>
    <div><center><DifferentPicture /></center></div>        
</>  )
}

import React from 'react'
import { NavLink } from 'react-router-dom';
import Image from '../assets/originals/smallTown.jpg';
import Image2 from '../assets/originals/iceFishing.jpg';
import Image3 from '../assets/originals/nascar.jpg';
import Image4 from '../assets/originals/living-room.jpg';
import Image5 from '../assets/originals/garfield.jpg';
import Image6 from '../assets/originals/logosUS.jpg';





const Index = () => {
return (
    <>
            <div className="mainLogo">
                <ul className="banner">
                    <p>D</p>
                    <p>I</p>
                    <p>F</p>
                    <p>F</p>
                    <p>E</p>
                    <p>R</p>
                    <p className="greenE">E</p>
                    <p>N</p>
                    <p>T</p>
                    <p>L</p>
                    <p>Y</p>
                </ul>
        <b>Ditto.</b> <br/>
        </div>
        <div className="pictureHolder">
        <div id="indexButton">On to the puzzles</div>
            <h2 className="gallerySign">G A L L E R Y</h2><br/>
            <center><a href={`/Differently/1/smallTown`}><img src={Image} alt="small Town" className="pictures"/></a></center>
            <center><a href={`/Differently/2/A-Living-Room`}><img src={Image4} alt="small Town" className="pictures"/></a></center>
            <center><a href={`/Differently/3/logosUS`}><img src={Image6} alt="small Town" className="pictures"/></a></center>
            <center><a href={`/Differently/4/living-room`}><img src={Image2} alt="small Town" className="pictures"/></a></center>
            <center><a href={`/Differently/5/garfield`}><img src={Image5} alt="small Town" className="pictures"/></a></center>
            <center><a href={`/Differently/6/logosUS`}><img src={Image3} alt="small Town" className="pictures"/></a></center>
        </div>
        <footer className="bottomMarker">     <nav>
        <NavLink to={"/"} id="leaveButton">L    E   A   V   E</NavLink>
    </nav>
</footer>
    </>
    )
}


  export default Index 
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Image from '../assets/originals/smallTown.jpg';




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
            <h2 className="gallerySign">G A L L E R Y</h2>
            <center><Link to={`/Differently/:id/:pictureName`}>On to the puzzles</Link></center>
            <center><img src={Image} alt="small Town" className="pictures"></img></center>
        </div>
        <footer className="bottomMarker">     <nav>
        <NavLink to={"/"}>QUIT</NavLink>
    </nav>
</footer>
    </>
    )
}


  export default Index 
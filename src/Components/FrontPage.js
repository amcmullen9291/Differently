import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class FrontPage extends PureComponent {
  render() {
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
        <center><Link to="/Differently"><center><button id="FrontOriginal">start</button></center></Link></center>
    
    {/* <footer className="bottomMarker"></footer> */}
</>
)
  }
}
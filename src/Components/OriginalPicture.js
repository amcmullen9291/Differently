import React, { useState } from 'react';
// import ImageMap from "image-map";
import Image from '../assets/originals/smallTown.jpg';

function OriginalPicture() {

     const [Original, setOriginal] = useState ({
 id: "",
 pictureName :'south-park-characters',
 source: "http//localhost:3000/originals/south-park-characters.jpg",
 picture: 18,
 alt: "Differently. Art", 
 itemOneCoords: '694,242,52',
 itemOneShape: 'circle',
 itemOneAlt: 'Kenny', 
 itemTwoCoords: '784,528,67', 
 itemTwoShape: 'circle',
 itemTwoAlt: 'Kyle',
 itemThreeCoords: '772,93,84',
 itemThreeShape: 'circle',
 itemThreeAlt: 'blimp',
 itemFourCoords: '500,149,27',
 itemFourShape: 'circle',
 itemFourAlt: 'Butters',
 itemFiveCoords: '0,162,117,207',
 itemFiveShape: 'rect',
 itemFiveAlt: 'mountaintop'})

 function HandleChange(e){
     setOriginal({...Original, [e.target.name]: [e.target.value = true]})
 }

 console.log("Original Picture Attributes:", Original);
 return (
<>
<img src={Image} alt="South Park" useMap="#image_map"/>
<map name="image_map">
  <area alt="chimney" title="chimney" href="#" coords="359,92,413,115" shape="rect" onClick={HandleChange}/>
  <area alt="doorTop" title="doorTop" href="#" coords="470,257,505,285" shape="rect"onClick={HandleChange}/>
  <area alt="missingWindow" title="missingWindow" href="#" coords="7,190,59,258" shape="rect"onClick={HandleChange}/>
  <area alt="whiteHouseWindow" title="whiteHouseWindow" href="#" coords="235,163,278,189" shape="rect"onClick={HandleChange}/>
  <area alt="kidsShorts" title="kidsShorts" href="#" coords="380,431,405,454" shape="rect"onClick={HandleChange}/>
</map>
</>
    )
}

  // const mapStateToProps = (state) => {
  //   return {
  //     Original: state.Original,
  //   }
  // } 

  export default OriginalPicture;
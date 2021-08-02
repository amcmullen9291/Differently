import React, {useState } from 'react';
// import ImageMap from "image-map";
import Image from '../assets/originals/smallTown-different.jpg';

function DifferentPicture() {

     const [Different, setDifferent] = useState ({
 id: "",
 pictureName :'south-park-characters',
 source: "",
 picture: 18,
 alt: 'Differently. Art', 
 itemOneFound: false,
 itemOneCoords: '694,242,52',
 itemOneShape: 'circle',
 itemOneAlt: 'Kenny', 
 itemTwoFound: false,
 itemTwoCoords: '784,528,67', 
 itemTwoShape: 'circle',
 itemTwoAlt: 'Kyle',
 itemThreeFound: false,
 itemThreeCoords: '772,93,84',
 itemThreeShape: 'circle',
 itemThreeAlt: 'blimp',
 iteonFournd: false,
 itemFourCoords: '500,149,27',
 itemFourShape: 'circle',
 itemFourAlt: 'Butters',
 iteonFiveFound: false,
 itemFiveCoords: '0,162,117,207',
 itemFiveShape: 'rect',
 itemFiveAlt: 'mountaintop'})

 function HandleChange(e){
    setDifferent({...Different, [e.target.name]: [e.target.value = true]});
  }

console.log("Different Pic Attributes:", Different)

  return (
<>
{/* <img src={Image} alt="South Park" useMap="#image_map"/> */}
<div id="image2">
{/* <img src={Image} alt="South Park" className="image1"/> */}
{/* <map name="image_map"> */}
  <area id="different_one" name= "itemOneFound" alt="chimney" title="chimney" href="#" coords="359,92,413,115" shape="rect" onClick={(id) => HandleChange("itemOneFound", "one")}/>
  <area id="different_two" name= "itemTwoFound" alt="doorTop" title="doorTop" href="#" coords="470,257,505,285" shape="rect"onClick={(id) => HandleChange("itemTwoFound", "two")}/>
  <area id="different_three" name= "itemThreeFound" alt="missingWindow" title="missingWindow" href="#" coords="7,190,59,258" shape="rect"onClick={(id) => HandleChange("itemThreeFound", "three")}/>
  <area id="different_four" name= "itemFourFound" alt="whiteHouseWindow" title="whiteHouseWindow" href="#" coords="235,163,278,189" shape="rect"onClick={(id) => HandleChange("itemFourFound", "four")}/>
  <button id="different_five" name= "itemFiveFound" alt="kidsShorts" title="kidsShorts" href="#" coords="380,431,405,454" shape="rect" onClick={(id) => HandleChange("itemFiveFound", "five")}/>
{/* </map> */}
</div>
</>

  )
}


export default DifferentPicture;

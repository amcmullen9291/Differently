import React, { useState } from 'react';
// import ImageMap from "image-map";
import Image from '../assets/originals/smallTown.jpg';

function OriginalPicture() {
  
     const [Original, setOriginal] = useState ({
 id: "",
 pictureName :'south-park-characters',
 source: "",
 picture: 18,
 alt: "Differently. Art", 
 itemOneCoords: '694,242,52',
 itemOneShape: 'circle',
 itemOneAlt: 'Kenny', 
 itemOneFound: false,
 itemTwoCoords: '784,528,67', 
 itemTwoShape: 'circle',
 itemTwoAlt: 'Kyle',
 itemTwoFound: false,
 itemThreeCoords: '772,93,84',
 itemThreeShape: 'circle',
 itemThreeAlt: 'blimp',
 itemThreeFound: false,
 itemFourCoords: '500,149,27',
 itemFourShape: 'circle',
 itemFourAlt: 'Butters',
 itemFourFound: false,
 itemFiveCoords: '0,162,117,207',
 itemFiveShape: 'rect',
 itemFiveAlt: 'mountaintop',
 itemFiveFound: false,
 name: " "
})

 function HandleChange(named){
     console.log(`${named}`)
     var itemFound = named;
     console.log("pre set:", itemFound)
     setOriginal({...Original, [`${named}`]: true})
    }

 console.log("Original Picture Attributes:", Original);
 return (
<>
<img src={Image} alt="South Park" useMap="#image_map"/>
<map name="image_map">
  <area name= "itemOneFound" alt="chimney" title="chimney" href="#" coords="359,92,413,115" shape="rect" onClick={() => HandleChange("itemOneFound")}/>
  <area name= "itemTwoFound" alt="doorTop" title="doorTop" href="#" coords="470,257,505,285" shape="rect"onClick={() => HandleChange("itemTwoFound")}/>
  <area name= "itemThreeFound" alt="missingWindow" title="missingWindow" href="#" coords="7,190,59,258" shape="rect"onClick={() => HandleChange("itemThreeFound")}/>
  <area name= "itemFourFound" alt="whiteHouseWindow" title="whiteHouseWindow" href="#" coords="235,163,278,189" shape="rect"onClick={() => HandleChange("itemFourFound")}/>
  <area name= "itemFiveFound" alt="kidsShorts" title="kidsShorts" href="#" coords="380,431,405,454" shape="rect"onClick={() => HandleChange("itemFiveFound")}/>
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
import React, { useState } from 'react';
import Image from '../assets/originals/smallTown.jpg';

function OriginalPicture() {
  
     const [Original, setOriginal] = useState ({
 id: "",
 pictureName :'smallTown',
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
 name: " ",
})



 function HandleChange(named, id){
     console.log(`${named}`)
     var itemFound = named;
     console.log("pre set:", itemFound)
     console.log("Button id:", id)
     setOriginal({...Original, [`${named}`]: true})
     const changed = document.getElementById(`${id}`)
     changed.id= "";
     changed.id = "found1"
    }

    function HandleChange2(named, id){
      console.log(`${named}`)
      var itemFound = named;
      console.log("pre set:", itemFound)
      console.log("Button id:", id)
      setOriginal({...Original, [`${named}`]: true})
      const changed = document.getElementById(`${id}`)
      changed.id= "";
      changed.id = "found2"
     }

     function HandleChange3(named, id){
      console.log(`${named}`)
      var itemFound = named;
      console.log("pre set:", itemFound)
      console.log("Button id:", id)
      setOriginal({...Original, [`${named}`]: true})
      const changed = document.getElementById(`${id}`)
      changed.id= "";
      changed.id = "found1"
     }

     function HandleChange4(named, id){
      console.log(`${named}`)
      var itemFound = named;
      console.log("pre set:", itemFound)
      console.log("Button id:", id)
      setOriginal({...Original, [`${named}`]: true})
      const changed = document.getElementById(`${id}`)
      changed.id= "";
      changed.id = "found1"
     }

     function HandleChange5(named, id){
      console.log(`${named}`)
      var itemFound = named;
      console.log("pre set:", itemFound)
      console.log("Button id:", id)
      setOriginal({...Original, [`${named}`]: true})
      const changed = document.getElementById(`${id}`)
      changed.id= "";
      changed.id = "found1"
     }
 

 console.log("Original Picture Attributes:", Original);
 return (
<>
<div id="image1">
  <button id="pickles" name= "itemOneFound" alt="chimney" title="chimney" href="#" coords="359,92,413,115" shape="rect" onClick={(id) => HandleChange2("itemOneFound", "pickles")}/>
  <button id="original_two" name= "itemTwoFound" alt="doorTop" title="doorTop" href="#" coords="470,257,505,285" shape="rect"onClick={(id) => HandleChange("itemTwoFound", "original_two")}/>
  <button id="original_three" name= "itemThreeFound" alt="missingWindow" title="missingWindow" href="#" coords="7,190,59,258" shape="rect"onClick={(id) => HandleChange("itemThreeFound", "original_three")}/>
  <button id="original_four" name= "itemFourFound" alt="whiteHouseWindow" title="whiteHouseWindow" href="#" coords="235,163,278,189" shape="rect"onClick={(id) => HandleChange("itemFourFound", "original_four")}/>
  <button id="apples" name= "itemFiveFound" alt="kidsShorts" title="kidsShorts" href="#" coords="380,431,405,454" shape="rect" onClick={(id) => HandleChange("itemFiveFound", "apples")}/>
</div>
</>
    )
}

  // const mapStateToProps = (state) => {
  //   return {
  //     Original: state.Original,
  //   }
  // } 

  export default OriginalPicture;
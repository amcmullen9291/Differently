import React, { useState } from 'react';

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
     changed.id = "found1";
     changed.disabled = true;
    }

    function HandleChange2(named, id){
      console.log(`${named}`)
      var itemFound = named;
      console.log("pre set:", itemFound)
      console.log("Button id:", id)
      setOriginal({...Original, [`${named}`]: true})
      const changed2 = document.getElementById(`${id}`)
      changed2.id = "found2"
      changed2.disabled = true;
     }

     function HandleChange3(named, id){
      console.log(`${named}`)
      var itemFound = named;
      console.log("pre set:", itemFound)
      console.log("Button id:", id)
      setOriginal({...Original, [`${named}`]: true})
      const changed3 = document.getElementById(`${id}`)
      changed3.id = "found3";
      changed3.disabled = true;
     }

     function HandleChange4(named, id){
      console.log(`${named}`)
      var itemFound = named;
      console.log("pre set:", itemFound)
      console.log("Button id:", id)
      setOriginal({...Original, [`${named}`]: true})
      const changed4 = document.getElementById(`${id}`)
      changed4.id = "found4";
      changed4.disabled = true;
     }
 
     function HandleChange5(named, id){
      console.log(`${named}`)
      var itemFound = named;
      console.log("pre set:", itemFound)
      console.log("Button id:", id)
      setOriginal({...Original, [`${named}`]: true})
      const changed5 = document.getElementById(`${id}`)
      changed5.id = "found5";
      changed5.disabled = true;
     }

 console.log("Original Picture Attributes:", Original);
 return (
<>
<div id="image1">
<button id="pickles" name= "itemOneFound" alt="chimney" title="chimney" href="#" coords="359,92,413,115" shape="rect" onClick={(id) => HandleChange2("itemOneFound", "pickles")}/>
  <button id="popcorn" name= "itemTwoFound" alt="doorTop" title="doorTop" href="#" coords="470,257,505,285" shape="rect"onClick={(id) => HandleChange4("itemTwoFound", "popcorn")}/>
  <button id="sidewalks" name= "itemThreeFound" alt="missingWindow" title="missingWindow" href="#" coords="7,190,59,258" shape="rect"onClick={(id) => HandleChange3("itemThreeFound", "sidewalks")}/>
  <button id="cheesecake" name= "itemFourFound" alt="WhiteHouse Window" title="WhiteHouse Window" href="#" coords="235,163,278,189" shape="rect"onClick={(id) => HandleChange5("itemFourFound", "cheesecake")}/>
  <button id="apples" name= "itemFiveFound" alt="Boy's Shorts" title="Boy's Shorts" href="#" coords="380,431,405,454" shape="rect" onClick={(id) => HandleChange("itemFiveFound", "apples")}/>
</div>
</>
    )
}

  // const mapStateToProps = (state) => {
  //   return {
  //     Original: state.Original,
  //     Different: state.Original
  //   }
  // } 

  export default OriginalPicture;
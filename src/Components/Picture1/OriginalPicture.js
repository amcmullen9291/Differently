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

const [Different, setDifferent] = useState ({
  id: "",
  pictureName :'smallTown-different',
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
  itemFourFound: false,
  itemFourCoords: '500,149,27',
  itemFourShape: 'circle',
  itemFourAlt: 'Butters',
  itemFiveFound: false,
  itemFiveCoords: '0,162,117,207',
  itemFiveShape: 'rect',
  itemFiveAlt: 'mountaintop'})
 
 function HandleChange(named, id){
     console.log(`${named}`)
     var itemFound = named;
     console.log("pre set:", itemFound)
     console.log("Button id:", id)
     setOriginal({...Original, [`${named}`]: true})
     const changed = document.getElementById(`${id}`)
     changed.id = "found1";
     const differentchange1 = document.getElementById('pillow');
     setDifferent({...Original, [`${named}`]: true});
     differentchange1.id = "found6";
     differentchange1.disabled = true;   
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
      const differentchange2 = document.getElementById('sherbet');
      setOriginal({...Original, [`${named}`]: true});
      differentchange2.id = "found7";
      differentchange2.disabled = true;    
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
      const differentchange3 = document.getElementById('ostrich');
      setOriginal({...Original, [`${named}`]: true});
      differentchange3.id = "found8";
      differentchange3.disabled = true;    
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
      const differentchange4 = document.getElementById('marmalade');
      setOriginal({...Original, [`${named}`]: true});
      differentchange4.id = "found9";
      differentchange4.disabled = true;    
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
      const differentchange5 = document.getElementById('snorkel');
      setOriginal({...Original, [`${named}`]: true});
      differentchange5.id = "found10";
      differentchange5.disabled = true;    
      changed5.disabled = true;
     }

 console.log("Original Picture Attributes:", Original);
 console.log("Different Picture Attributes:", Different);

 return (
<>
<div id="image1">
<button id="pickles" name= "itemOneFound" alt="chimney" title="" href="#" coords="359,92,413,115" shape="rect" onClick={(id) => HandleChange2("itemOneFound", "pickles")}/>
  <button id="popcorn" name= "itemTwoFound" alt="doorTop" title="" href="#" coords="470,257,505,285" shape="rect"onClick={(id) => HandleChange4("itemTwoFound", "popcorn")}/>
  <button id="sidewalks" name= "itemThreeFound" alt="missingWindow" title="" href="#" coords="7,190,59,258" shape="rect"onClick={(id) => HandleChange3("itemThreeFound", "sidewalks")}/>
  <button id="cheesecake" name= "itemFourFound" alt="WhiteHouse Window" title="" href="#" coords="235,163,278,189" shape="rect"onClick={(id) => HandleChange5("itemFourFound", "cheesecake")}/>
  <button id="apples" name= "itemFiveFound" alt="Boy's Shorts" title="" href="#" coords="380,431,405,454" shape="rect" onClick={(id) => HandleChange("itemFiveFound", "apples")}/>
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
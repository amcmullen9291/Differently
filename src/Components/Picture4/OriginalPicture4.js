import React, { useState } from 'react';

function OriginalPicture4() {
  
     const [Original4, setOriginal4] = useState ({
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

const [Different4, setDifferent4] = useState ({
  id: "",
  pictureName :'smallTown-Different4',
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
     setOriginal4({...Original4, [`${named}`]: true})
     const changed = document.getElementById(`${id}`)
     changed.id = "found31";
     const Different4change1 = document.getElementById('horse');
     setDifferent4({...Original4, [`${named}`]: true});
     Different4change1.id = "found36";
     Different4change1.disabled = true;   
     changed.disabled = true;
    }

    function HandleChange2(named, id){
      console.log(`${named}`)
      var itemFound = named;
      console.log("pre set:", itemFound)
      console.log("Button id:", id)
      setOriginal4({...Original4, [`${named}`]: true})
      const changed2 = document.getElementById(`${id}`)
      changed2.id = "found32"
      const Different4change2 = document.getElementById('corndog');
      setOriginal4({...Original4, [`${named}`]: true});
      Different4change2.id = "found37";
      Different4change2.disabled = true;    
      changed2.disabled = true;
     }

     function HandleChange3(named, id){
      console.log(`${named}`)
      var itemFound = named;
      console.log("pre set:", itemFound)
      console.log("Button id:", id)
      setOriginal4({...Original4, [`${named}`]: true})
      const changed3 = document.getElementById(`${id}`)
      changed3.id = "found33";
      const Different4change3 = document.getElementById('brainy');
      setOriginal4({...Original4, [`${named}`]: true});
      Different4change3.id = "found38";
      Different4change3.disabled = true;    
      changed3.disabled = true;
     }

     function HandleChange4(named, id){
      console.log(`${named}`)
      var itemFound = named;
      console.log("pre set:", itemFound)
      console.log("Button id:", id)
      setOriginal4({...Original4, [`${named}`]: true})
      const changed4 = document.getElementById(`${id}`)
      changed4.id = "found34";
      const Different4change4 = document.getElementById('abroad');
      setOriginal4({...Original4, [`${named}`]: true});
      Different4change4.id = "found39";
      Different4change4.disabled = true;    
      changed4.disabled = true;
     }
 
     function HandleChange5(named, id){
      console.log(`${named}`)
      var itemFound = named;
      console.log("pre set:", itemFound)
      console.log("Button id:", id)
      setOriginal4({...Original4, [`${named}`]: true})
      const changed5 = document.getElementById(`${id}`)
      changed5.id = "found35";
      const Different4change5 = document.getElementById('quill');
      setOriginal4({...Original4, [`${named}`]: true});
      Different4change5.id = "found40";
      Different4change5.disabled = true;    
      changed5.disabled = true;
     }

 console.log("Original4 Picture Attributes:", Original4);
 console.log("Different4 Picture Attributes:", Different4);

 return (
<>
<div id="image7">
<button id="control" name= "itemOneFound" alt="chimney" title="" href="#" coords="359,92,413,115" shape="rect" onClick={(id) => HandleChange2("itemOneFound", "control")}/>
  <button id="lumber" name= "itemTwoFound" alt="doorTop" title="" href="#" coords="470,257,505,285" shape="rect"onClick={(id) => HandleChange4("itemTwoFound", "lumber")}/>
  <button id="whistle" name= "itemThreeFound" alt="missingWindow" title="" href="#" coords="7,190,59,258" shape="rect"onClick={(id) => HandleChange3("itemThreeFound", "whistle")}/>
  <button id="rabbit" name= "itemFourFound" alt="WhiteHouse Window" title="" href="#" coords="235,163,278,189" shape="rect"onClick={(id) => HandleChange5("itemFourFound", "rabbit")}/>
  <button id="bells" name= "itemFiveFound" alt="Boy's Shorts" title="" href="#" coords="380,431,405,454" shape="rect" onClick={(id) => HandleChange("itemFiveFound", "bells")}/>
</div>
</>
    )
}

  // const mapStateToProps = (state) => {
  //   return {
  //     Original4: state.Original4,
  //     Different4: state.Original4
  //   }
  // } 

  export default OriginalPicture4;
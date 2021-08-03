import React, {useState } from 'react';

function DifferentPicture4() {

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

 const [Original4, setOriginal4] = useState ({
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
 

 function HandleChange6(named, id){
  console.log(`${named}`)
  var itemFound = named;
  console.log("pre set:", itemFound)
  console.log("Button id:", id)
  setDifferent4({...Different4, [`${named}`]: true})
  const changed6 = document.getElementById(`${id}`)
  changed6.id = "found36";
  const Original4change1 = document.getElementById('bells');
  setOriginal4({...Original4, [`${named}`]: true});
  Original4change1.id = "found31";
  Original4change1.disabled = true;
  changed6.disabled = true;
 }

 function HandleChange7(named, id){
  console.log(`${named}`)
  var itemFound = named;
  console.log("pre set:", itemFound)
  console.log("Button id:", id)
  setDifferent4({...Different4, [`${named}`]: true})
  const changed7 = document.getElementById(`${id}`)
  changed7.id = "found37";
  const Original4change2 = document.getElementById('control');
  setOriginal4({...Original4, [`${named}`]: true});
  Original4change2.id = "found32";
  Original4change2.disabled = true;
  changed7.disabled = true;
 }

 function HandleChange8(named, id){
  console.log(`${named}`)
  var itemFound = named;
  console.log("pre set:", itemFound)
  console.log("Button id:", id)
  setDifferent4({...Different4, [`${named}`]: true})
  const changed8 = document.getElementById(`${id}`)
  changed8.id = "found38";
  const Original4change3 = document.getElementById('whistle');
  setOriginal4({...Original4, [`${named}`]: true});
  Original4change3.id = "found33";
  Original4change3.disabled = true;
  changed8.disabled = true;
 }

 function HandleChange9(named, id){
  console.log(`${named}`)
  var itemFound = named;
  console.log("pre set:", itemFound)
  console.log("Button id:", id)
  setDifferent4({...Different4, [`${named}`]: true})
  const changed9 = document.getElementById(`${id}`)
  changed9.id = "found39";
  const Original4change4 = document.getElementById('lumber');
  setOriginal4({...Original4, [`${named}`]: true});
  Original4change4.id = "found34";
  Original4change4.disabled = true;
  changed9.disabled = true;
 }

 function HandleChange10(named, id){
  console.log(`${named}`)
  var itemFound = named;
  console.log("pre set:", itemFound)
  console.log("Button id:", id)
  setDifferent4({...Different4, [`${named}`]: true})
  const changed10 = document.getElementById(`${id}`)
  changed10.id = "found40";
  const Original4change5 = document.getElementById('rabbit');
  setOriginal4({...Original4, [`${named}`]: true});
  Original4change5.id = "found35";
  Original4change5.disabled = true;
  changed10.disabled = true;
 }

console.log("Different4 Pic Attributes:", Different4)
console.log("Original4 Pic Attributes:", Original4);

  return (
<>
<div id="image8">
  <button id="corndog" name= "itemOneFound" alt="chimney" title="" href="#" coords="359,92,413,115" shape="rect" onClick={(id) => HandleChange7("itemOneFound", "corndog")}/>
  <button id="abroad" name= "itemTwoFound" alt="doorTop" title="" href="#" coords="470,257,505,285" shape="rect"onClick={(id) => HandleChange9("itemTwoFound", "abroad")}/>
  <button id="brainy" name= "itemThreeFound" alt="missingWindow" title="" href="#" coords="7,190,59,258" shape="rect"onClick={(id) => HandleChange8("itemThreeFound", "brainy")}/>
  <button id="quill" name= "itemFourFound" alt="WhiteHouse Window" title="" href="#" coords="235,163,278,189" shape="rect"onClick={(id) => HandleChange10("itemFourFound", "quill")}/>
  <button id="horse" name= "itemFiveFound" alt="Boy's Shorts" title="" href="#" coords="380,431,405,454" shape="rect" onClick={(id) => HandleChange6("itemFiveFound", "horse")}/>
</div>
</>

  )
}


export default DifferentPicture4;

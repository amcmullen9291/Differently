import React, {useState } from 'react';

function DifferentPicture3() {

     const [Different3, setDifferent3] = useState ({
 id: "",
 pictureName :'smallTown-Different3',
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

 const [Original, setOriginal] = useState ({
  id: "",
  pictureName :'smallTown-Different3',
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
  setDifferent3({...Different3, [`${named}`]: true})
  const changed6 = document.getElementById(`${id}`)
  changed6.id = "found6";
  const originalchange1 = document.getElementById('apples');
  setOriginal({...Original, [`${named}`]: true});
  originalchange1.id = "found6";
  originalchange1.disabled = true;
  changed6.disabled = true;
 }

 function HandleChange7(named, id){
  console.log(`${named}`)
  var itemFound = named;
  console.log("pre set:", itemFound)
  console.log("Button id:", id)
  setDifferent3({...Different3, [`${named}`]: true})
  const changed7 = document.getElementById(`${id}`)
  changed7.id = "found7";
  const originalchange2 = document.getElementById('pickles');
  setOriginal({...Original, [`${named}`]: true});
  originalchange2.id = "found7";
  originalchange2.disabled = true;
  changed7.disabled = true;
 }

 function HandleChange8(named, id){
  console.log(`${named}`)
  var itemFound = named;
  console.log("pre set:", itemFound)
  console.log("Button id:", id)
  setDifferent3({...Different3, [`${named}`]: true})
  const changed8 = document.getElementById(`${id}`)
  changed8.id = "found8";
  const originalchange3 = document.getElementById('sidewalks');
  setOriginal({...Original, [`${named}`]: true});
  originalchange3.id = "found8";
  originalchange3.disabled = true;
  changed8.disabled = true;
 }

 function HandleChange9(named, id){
  console.log(`${named}`)
  var itemFound = named;
  console.log("pre set:", itemFound)
  console.log("Button id:", id)
  setDifferent3({...Different3, [`${named}`]: true})
  const changed9 = document.getElementById(`${id}`)
  changed9.id = "found9";
  const originalchange4 = document.getElementById('popcorn');
  setOriginal({...Original, [`${named}`]: true});
  originalchange4.id = "found9";
  originalchange4.disabled = true;
  changed9.disabled = true;
 }

 function HandleChange10(named, id){
  console.log(`${named}`)
  var itemFound = named;
  console.log("pre set:", itemFound)
  console.log("Button id:", id)
  setDifferent3({...Different3, [`${named}`]: true})
  const changed10 = document.getElementById(`${id}`)
  changed10.id = "found10";
  const originalchange5 = document.getElementById('cheesecake');
  setOriginal({...Original, [`${named}`]: true});
  originalchange5.id = "found10";
  originalchange5.disabled = true;
  changed10.disabled = true;
 }

console.log("Different3 Pic Attributes:", Different3)
console.log("Original Pic Attributes:", Original);

  return (
<>
<div id="image6">
  <button id="sherbet" name= "itemOneFound" alt="chimney" title="chimney" href="#" coords="359,92,413,115" shape="rect" onClick={(id) => HandleChange7("itemOneFound", "sherbet")}/>
  <button id="marmalade" name= "itemTwoFound" alt="doorTop" title="doorTop" href="#" coords="470,257,505,285" shape="rect"onClick={(id) => HandleChange9("itemTwoFound", "marmalade")}/>
  <button id="ostrich" name= "itemThreeFound" alt="missingWindow" title="missingWindow" href="#" coords="7,190,59,258" shape="rect"onClick={(id) => HandleChange8("itemThreeFound", "ostrich")}/>
  <button id="snorkel" name= "itemFourFound" alt="WhiteHouse Window" title="WhiteHouse Window" href="#" coords="235,163,278,189" shape="rect"onClick={(id) => HandleChange10("itemFourFound", "snorkel")}/>
  <button id="pillow" name= "itemFiveFound" alt="Boy's Shorts" title="Boy's Shorts" href="#" coords="380,431,405,454" shape="rect" onClick={(id) => HandleChange6("itemFiveFound", "pillow")}/>
</div>
</>

  )
}


export default DifferentPicture3;

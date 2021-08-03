import React, {useState } from 'react';

function DifferentPicture2() {

     const [Different2, setDifferent2] = useState ({
 id: "",
 pictureName :'smallTown-Different2',
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

 const [Original2, setOriginal2] = useState ({
  id: "",
  pictureName :'smallTown-Different2',
  source: "",
  picture: 18,
  alt: 'Different2ly. Art', 
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
  setDifferent2({...Different2, [`${named}`]: true})
  const changed6 = document.getElementById(`${id}`)
  changed6.id = "found6";
  const Original2change1 = document.getElementById('apples');
  setOriginal2({...Original2, [`${named}`]: true});
  Original2change1.id = "found6";
  Original2change1.disabled = true;
  changed6.disabled = true;
 }

 function HandleChange7(named, id){
  console.log(`${named}`)
  var itemFound = named;
  console.log("pre set:", itemFound)
  console.log("Button id:", id)
  setDifferent2({...Different2, [`${named}`]: true})
  const changed7 = document.getElementById(`${id}`)
  changed7.id = "found7";
  const Original2change2 = document.getElementById('pickles');
  setOriginal2({...Original2, [`${named}`]: true});
  Original2change2.id = "found7";
  Original2change2.disabled = true;
  changed7.disabled = true;
 }

 function HandleChange8(named, id){
  console.log(`${named}`)
  var itemFound = named;
  console.log("pre set:", itemFound)
  console.log("Button id:", id)
  setDifferent2({...Different2, [`${named}`]: true})
  const changed8 = document.getElementById(`${id}`)
  changed8.id = "found8";
  const Original2change3 = document.getElementById('sidewalks');
  setOriginal2({...Original2, [`${named}`]: true});
  Original2change3.id = "found8";
  Original2change3.disabled = true;
  changed8.disabled = true;
 }

 function HandleChange9(named, id){
  console.log(`${named}`)
  var itemFound = named;
  console.log("pre set:", itemFound)
  console.log("Button id:", id)
  setDifferent2({...Different2, [`${named}`]: true})
  const changed9 = document.getElementById(`${id}`)
  changed9.id = "found9";
  const Original2change4 = document.getElementById('popcorn');
  setOriginal2({...Original2, [`${named}`]: true});
  Original2change4.id = "found9";
  Original2change4.disabled = true;
  changed9.disabled = true;
 }

 function HandleChange10(named, id){
  console.log(`${named}`)
  var itemFound = named;
  console.log("pre set:", itemFound)
  console.log("Button id:", id)
  setDifferent2({...Different2, [`${named}`]: true})
  const changed10 = document.getElementById(`${id}`)
  changed10.id = "found10";
  const Original2change5 = document.getElementById('cheesecake');
  setOriginal2({...Original2, [`${named}`]: true});
  Original2change5.id = "found10";
  Original2change5.disabled = true;
  changed10.disabled = true;
 }

console.log("Different2 Pic Attributes:", Different2)
console.log("Original2 Pic Attributes:", Original2);

  return (
<>
<div id="image4">
  <button id="sherbet" name= "itemOneFound" alt="chimney" title="chimney" href="#" coords="359,92,413,115" shape="rect" onClick={(id) => HandleChange7("itemOneFound", "sherbet")}/>
  <button id="marmalade" name= "itemTwoFound" alt="doorTop" title="doorTop" href="#" coords="470,257,505,285" shape="rect"onClick={(id) => HandleChange9("itemTwoFound", "marmalade")}/>
  <button id="ostrich" name= "itemThreeFound" alt="missingWindow" title="missingWindow" href="#" coords="7,190,59,258" shape="rect"onClick={(id) => HandleChange8("itemThreeFound", "ostrich")}/>
  <button id="snorkel" name= "itemFourFound" alt="WhiteHouse Window" title="WhiteHouse Window" href="#" coords="235,163,278,189" shape="rect"onClick={(id) => HandleChange10("itemFourFound", "snorkel")}/>
  <button id="pillow" name= "itemFiveFound" alt="Boy's Shorts" title="Boy's Shorts" href="#" coords="380,431,405,454" shape="rect" onClick={(id) => HandleChange6("itemFiveFound", "pillow")}/>
</div>
</>

  )
}


export default DifferentPicture2;

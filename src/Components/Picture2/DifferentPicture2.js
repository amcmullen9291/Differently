import React, {useState } from 'react';

function DifferentPicture2() {

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

 const [Original, setOriginal] = useState ({
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
 

 function HandleChange6(named, id){
  console.log(`${named}`)
  var itemFound = named;
  console.log("pre set:", itemFound)
  console.log("Button id:", id)
  setDifferent({...Different, [`${named}`]: true})
  const changed6 = document.getElementById(`${id}`)
  changed6.id = "found16";
  const originalchange1 = document.getElementById('camp');
  setOriginal({...Original, [`${named}`]: true});
  originalchange1.id = "found11";
  originalchange1.disabled = true;
  changed6.disabled = true;
 }

 function HandleChange7(named, id){
  console.log(`${named}`)
  var itemFound = named;
  console.log("pre set:", itemFound)
  console.log("Button id:", id)
  setDifferent({...Different, [`${named}`]: true})
  const changed7 = document.getElementById(`${id}`)
  changed7.id = "found17";
  const originalchange2 = document.getElementById('ablaze');
  setOriginal({...Original, [`${named}`]: true});
  originalchange2.id = "found12";
  originalchange2.disabled = true;
  changed7.disabled = true;
 }

 function HandleChange8(named, id){
  console.log(`${named}`)
  var itemFound = named;
  console.log("pre set:", itemFound)
  console.log("Button id:", id)
  setDifferent({...Different, [`${named}`]: true})
  const changed8 = document.getElementById(`${id}`)
  changed8.id = "found18";
  const originalchange3 = document.getElementById('provide');
  setOriginal({...Original, [`${named}`]: true});
  originalchange3.id = "found13";
  originalchange3.disabled = true;
  changed8.disabled = true;
 }

 function HandleChange9(named, id){
  console.log(`${named}`)
  var itemFound = named;
  console.log("pre set:", itemFound)
  console.log("Button id:", id)
  setDifferent({...Different, [`${named}`]: true})
  const changed9 = document.getElementById(`${id}`)
  changed9.id = "found19";
  const originalchange4 = document.getElementById('purring');
  setOriginal({...Original, [`${named}`]: true});
  originalchange4.id = "found14";
  originalchange4.disabled = true;
  changed9.disabled = true;
 }

 function HandleChange10(named, id){
  console.log(`${named}`)
  var itemFound = named;
  console.log("pre set:", itemFound)
  console.log("Button id:", id)
  setDifferent({...Different, [`${named}`]: true})
  const changed10 = document.getElementById(`${id}`)
  changed10.id = "found20";
  const originalchange5 = document.getElementById('glossy');
  setOriginal({...Original, [`${named}`]: true});
  originalchange5.id = "found15";
  originalchange5.disabled = true;
  changed10.disabled = true;
 }

console.log("Different Pic Attributes:", Different)
console.log("Original Pic Attributes:", Original);

  return (
<>
<div id="image4">
  <button id="twig" name= "itemOneFound" alt="chimney" title="chimney" href="#" coords="359,92,413,115" shape="rect" onClick={(id) => HandleChange7("itemOneFound", "twig")}/>
  <button id="silk" name= "itemTwoFound" alt="wallPicture" title="wallPicture" href="#" coords="470,257,505,285" shape="rect"onClick={(id) => HandleChange9("itemTwoFound", "silk")}/>
  <button id="answer" name= "itemThreeFound" alt="carpet" title="coal" href="#" coords="7,190,59,258" shape="rect"onClick={(id) => HandleChange8("itemThreeFound", "answer")}/>
  <button id="coal" name= "itemFourFound" alt="WhiteHouse Window" title="WhiteHouse Window" href="#" coords="235,163,278,189" shape="rect"onClick={(id) => HandleChange10("itemFourFound", "coal")}/>
  <button id="raspy" name= "itemFiveFound" alt="tabletop" title="tabletop" href="#" coords="380,431,405,454" shape="rect" onClick={(id) => HandleChange6("itemFiveFound", "raspy")}/>
</div>
</>

  )
}


export default DifferentPicture2;

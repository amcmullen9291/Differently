import React from 'react';
import { useSelector } from 'react-redux';


 const MenuList = () => {
  const originals = useSelector((state) => state.Index.pictures.data);

   if (originals) {
      var renderIndex = originals.map(original => {
        const {id, pictureName, source, alt } = original.attributes;
        // console.log(entry.id);
        return (<aside key={id}>
          <center><a href={`/Differently/${original.id}/${pictureName}`} className="menuTitles">{pictureName}</a></center>
                <center><a href={`/Differently/${original.id}/${pictureName}`}><img src={source} alt={alt} className="pictures" /></a></center>
          </aside>)
      })
    }
    return(
      <>
      <div>{renderIndex}</div>
      </>
    )
  }
export default MenuList;

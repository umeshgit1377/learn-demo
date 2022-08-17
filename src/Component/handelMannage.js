import React, { useState, useContext} from 'react';
import NoteContext from '../Context/NoteContext';
import InnerComponent from '../Component/innerComponent'
function  HandelMannage() {
   const [ toggle, setToggle ] = useState(false);
   const getData = useContext(NoteContext)
    return (  
      <div>
         <ul>
            <li>Hello {getData.name} Your Address {getData.address} here?</li>
         </ul>
         <InnerComponent />
         <button onClick={() => setToggle(!toggle)}>Toggle Dropdown Markup</button>
            {toggle && (
            <ul>
               <li>Show me</li>
               <li>Only when</li>
               <li>Toggle === true</li>
            </ul>
            )}
      </div>
   )
}
export default HandelMannage;

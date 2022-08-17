import React, {useContext} from 'react';
import NoteContext from '../Context/NoteContext';
function InnerComponent() {
    const a = useContext(NoteContext);
    return (
        <div>
           this is inner component {a.name}
        </div>
    );
}
export default InnerComponent;
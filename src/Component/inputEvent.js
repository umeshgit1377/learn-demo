import React, {useState} from 'react'
function InputEvent() {
    const [value, setVlue] = useState("")
    const changeVal = (ev) => {
      const final = ev.target.value;
    setVlue(final);
  }
  return (
    <div>
        <input type="text" name='name' onChange={changeVal} />
        {value}
    </div>
  )
}
export default InputEvent;


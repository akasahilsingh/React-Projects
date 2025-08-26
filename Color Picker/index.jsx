const { useState } = React;

export const ColorPicker = () => {

const [chooseColor, setColor] = useState('#fff')

return (
  <div id="color-picker-container" style={{backgroundColor: chooseColor}}>
  <input type="color" id="color-input" value={chooseColor}
  onChange={(e)=>setColor(e.target.value)}
  />
  </div>
)
};



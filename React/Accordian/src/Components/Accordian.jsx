import React, { useState } from "react";
import { data } from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);
  const handleSingleClick = (id) => {
    setSelected(id === selected ? null : id);
  };
  const handleMultiClick = (id) => {
    let mltCopy = [...multiSelect];
    let index = mltCopy.indexOf(id) 
    if(index === -1) {
        mltCopy.push(id)
    } else {
      mltCopy.splice(index, 1)   
    }

    setMultiSelect(mltCopy)
    console.log(index, mltCopy)
    
  };
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>
        Enable Multi Selection
      </button>
      {data && data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className="all-content">
            <div className="accordian">
              <h3>{item.title}</h3>

              <span
                onClick={
                  enableMultiSelect
                    ? () => handleMultiClick(item.id)
                    : () => handleSingleClick(item.id)
                }
              >
                +
              </span>
            </div>
            {
                enableMultiSelect ?
                multiSelect.indexOf(item.id) !==-1 && <div className="content">{item.content}</div> :
                 selected === item.id && <div className="content">{item.content}</div>
            }
            {/* {selected === item.id ? (
              <div className="content">{item.content}</div>
            ) : null} */}
          </div>
        ))
      ) : (
        <div>No Data Found</div>
      )}
    </div>
  );
};

export default Accordian;

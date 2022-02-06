import React, { useContext, useEffect, useState } from "react";
import { FcOk, FcCollapse, FcExpand, FcNightPortrait } from "react-icons/fc";

const Data = ({ name, des,jobtypes }) => {
  //to collapse

  const [show, setShow] = useState(false);

  return (
    <>
      <div className="card post-title">
        <div className="collapse-option">
          <h6>{name}</h6>

          <p onClick={() => setShow(!show)}>
            {show ? <FcCollapse size={20} /> : <FcExpand size={20} />}
          </p>
        </div>
        <div>{show && <p>{des}</p>}</div>
        <div>{show && <h6>{jobtypes}</h6>}</div>

      </div>
    </>
  );
};

export default Data;

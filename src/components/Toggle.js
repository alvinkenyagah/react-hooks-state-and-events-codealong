import React, { useState } from "react";

function Toggle() {
  useState(true);
  const [ison, setIson] = useState(true);

  const handleClick = (e) => {
    setIson(!ison);
    console.log(ison);
  };
  

  const Header = ({ison}) => {
    return <h1> {ison ? "ON" : "OFF"}</h1>;
  };

  return(
  <>
    <Header ison={ison} />
    <button onClick={handleClick}>{ison ? "on" : "off"}</button>
  </>
  )
}

export default Toggle;

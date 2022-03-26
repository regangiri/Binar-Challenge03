import React from "react";
import Carcard from "./Carcard";

function Rendercard() {
  const indexCardArr = Array.from(Array(10).keys());

  const loop = (indexCardArr) => {
    const cards = indexCardArr;
    return cards.map((value) => {
      return <Carcard />;
    });
  };

  return <div className="d-flex flex-wrap">{loop(indexCardArr)}</div>;
}

export default Rendercard;

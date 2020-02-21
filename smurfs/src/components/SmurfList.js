import React, { useContext } from "react";
import { SmurfContext } from "../contexts/SmurfContext";
import Smurf from "./Smurf";

const SmurfList = () => {
  const { smurfs } = useContext(SmurfContext);
  console.log(smurfs);
  return (
    <div>
      {smurfs.map(smurf => {
        return <Smurf smurf={smurf} />;
      })}
    </div>
  );
};

export default SmurfList;

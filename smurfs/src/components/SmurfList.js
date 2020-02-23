import React, { useContext } from "react";
import { SmurfContext } from "../contexts/SmurfContext";
import Smurf from "./Smurf";
import styled from "styled-components";

const ListDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`;

const SmurfList = () => {
  const { smurfs } = useContext(SmurfContext);
  console.log(smurfs);
  return (
    <ListDiv>
      {smurfs.map(smurf => {
        return <Smurf smurf={smurf} />;
      })}
    </ListDiv>
  );
};

export default SmurfList;

import React from "react";
import { ethers } from "ethers";

//get web3
import GetWe3Provider from "./Context/getWe3Provider";

const App = () => {
  return (
    <GetWe3Provider>
      <h1>hey there</h1>
    </GetWe3Provider>
  );
};

export default App;

import React from "react";

//Components
import Navbar from "./Components/Navbar";

//Provider
import VotingContractContext from "./Context/votingContractProvider";

const App = () => {
  return (
    <VotingContractContext>
      <Navbar />
    </VotingContractContext>
  );
};

export default App;

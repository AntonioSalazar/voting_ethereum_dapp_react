import React, { useContext } from "react";

import { VotingContext } from "../Context/votingContractProvider";

const Navbar = () => {
  const { contractInstance } = useContext(VotingContext);
  console.log(contractInstance);
  return <div></div>;
};

export default Navbar;

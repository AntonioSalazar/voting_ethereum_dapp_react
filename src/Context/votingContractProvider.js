import React, { createContext, useState, useEffect } from 'react';
import Web3 from 'web3';
import {votingContractABI} from '../ABI/votingContractABI';
require('dotenv').config();


export const VotingContext = createContext();

const VotingContractContext = props => {

    const [ contractInstance, setContranctInstance ] = useState({});

    const connectToVotingContract = async () => {
        let web3 = new Web3(window.ethereum);
        await window.ethereum.request({method: 'eth_requestAccounts'})// get permission to access accounts
        const contractAddress = '0x409997f69D247Abc84855e7Ee6DAe78CFE4B8329';
        const votingContract = await new web3.eth.Contract(votingContractABI, contractAddress);
        setContranctInstance(votingContract);
    }

    useEffect(() => {
        connectToVotingContract()
    }, [])

    return (
        <VotingContext.Provider
            value={{
                contractInstance
            }}
        >
            {props.children}
        </VotingContext.Provider>
    )
}

export default VotingContractContext

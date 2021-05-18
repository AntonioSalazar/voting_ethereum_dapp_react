import React, { createContext, useState, useEffect } from 'react';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider'
import {votingContractABI} from '../ABI/votingContractABI';
require('dotenv').config();


export const VotingContext = createContext();

const VotingContractContext = props => {

    const [ contractInstance, setContranctInstance ] = useState({});
    const [ currentAccount, setCurrentAccount ] = useState('');

    const connectToVotingContract = async () => {
        const provider = await detectEthereumProvider();
        if (provider) {
            console.log('provider succesfully detected');
            if (provider !== window.ethereum) {
                console.log('Do you have multiple wallets installed?');
            } else {
                let web3 = new Web3(window.ethereum);
                await window.ethereum.request({method: 'eth_requestAccounts'})// get permission to access accounts
                const contractAddress = '0x409997f69D247Abc84855e7Ee6DAe78CFE4B8329';
                const votingContract = await new web3.eth.Contract(votingContractABI, contractAddress);
                setContranctInstance(votingContract);
            }
        } else {
            window.alert('You need to install MetaMask browser extension')
        }
        
    }

    const getCurrentAccount = async() => {
        let web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setCurrentAccount(accounts[0])
        //detect when the user changes the metamask account, currentAccount will always be the selected user account
        window.ethereum.on('accountsChanged', accounts => setCurrentAccount(accounts[0])) 
    }

    useEffect(() => {
        connectToVotingContract()
        getCurrentAccount()
    }, [])

    return (
        <VotingContext.Provider
            value={{
                contractInstance,
                currentAccount
            }}
        >
            {props.children}
        </VotingContext.Provider>
    )
}

export default VotingContractContext

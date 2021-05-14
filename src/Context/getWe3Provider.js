import React, { createContext, useEffect } from 'react';
import { votingContractABI } from '../ABI/votingContractABI';
require('dotenv').config();

export const Web3Context = createContext()

const GetWe3Provider = props => {




    useEffect(() => {
    }, [])

    return (
        <Web3Context.Provider
            value={{

            }}
        >
            {props.children}
        </Web3Context.Provider>
    )
}

export default GetWe3Provider

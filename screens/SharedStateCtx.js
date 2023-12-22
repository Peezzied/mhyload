// SharedStateContext.js
import React, { createContext, useContext, useState } from 'react';

const SharedStateContext = createContext();

export const SharedStateProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState(true);
  const [customerNum, setCustomerNum] = useState('Create New');
  const [networkName, setNetworkName] = useState();
  const [child, setChild] = useState()

  return (
    <SharedStateContext.Provider value={{ sharedState, setSharedState, customerNum, setCustomerNum, networkName, setNetworkName, child, setChild }}>
      {children}
    </SharedStateContext.Provider>
  );
};

export const useSharedState = () => {
  const context = useContext(SharedStateContext);
  if (!context) {
    throw new Error('useSharedState must be used within a SharedStateProvider');
  }
  return context;
};

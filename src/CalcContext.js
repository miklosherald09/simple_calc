import React, { useContext, useState, useRef, useReducer } from "react";


const CalcContext = React.createContext(null);

const CalcProvider = ({ children }) => {
  
  const [ val, setVal ] = useState(0);
  const [ temp, setTemp ] = useState(0);
  const [ ops, setOps ] = useState(null);
  const [ refresh, setRefresh ] = useState(false);

  const clear = async (params) => {
    setTemp(0)
    setVal(0)
    setOps(null)
    setRefresh(false)
  }


  return (
    <CalcContext.Provider
      value={{
        val,
        ops,
        temp,
        refresh,
        setVal,
        setOps,
        setTemp,
        setRefresh,
        clear
      }}
    >
      {children}
    </CalcContext.Provider>
  );
};

const useCalc = () => {
  const calc = useContext(CalcContext);
  if (calc == null) {
    throw new Error("useCalc() called outside of a calcProvider?"); // an alert is not placed because this is an error for the developer not the user
  }
  return calc;
};

export { CalcProvider, useCalc };

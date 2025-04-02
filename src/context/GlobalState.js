// import React,{Children, createContext, useReducer} from "react";
// import AppReduser from "./AppReduser";
// //initial state 
// const InitialState ={
//      transaction: [
//           { id: 1, text: 'Flower', amount: -20 },
//           { id: 2, text: 'Salary', amount: 300 },
//           { id: 3, text: 'Book', amount: -10 },
//           { id: 4, text: 'Camera', amount: 150 }
//         ]
// }

// //Create context
// export const GlobalContext =createContext (InitialState)
// //provider component
// export const  GlobalProvider = ({Children})=>{
//     const [state, dispatch]=useReducer(AppReduser , InitialState)
//     return (<GlobalContext.Provider value={ 
//         {
//             transaction : state.transaction
//         }
//     }>

//         {Children}
//     </GlobalContext.Provider>)
// }






import React, { createContext, useReducer } from 'react';
import AppReduser from './AppReduser';

//initial state 
const InitialState ={
     transaction:  []
}

export const GlobalContext = createContext(InitialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReduser, InitialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transaction,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}
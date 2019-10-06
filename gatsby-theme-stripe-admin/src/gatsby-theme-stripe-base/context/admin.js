import React, {createContext, useContext, useReducer} from react;

export const AdminContext = createContext();

const reducer = (admin, action) => {

    switch(action.type) {
        default:
            return admin;
    }
}

export const AdminProvider = ({children, stripe}) => {
    return (
        <AdminContext.AdminProvider value={useReducer(reducer, {})}>
            {children}
        </AdminContext.AdminProvider>
    )
}


export const useCart = () => {

  return {
  }
}
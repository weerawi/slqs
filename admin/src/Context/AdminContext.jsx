import React, { createContext } from 'react';

export const AdminContext = createContext(null);

const AdminContextProvider = ({ children }) => {
    const DIR = 'http://localhost:4000';

    const contextValue = {
        DIR
    }

    return (
        <AdminContext.Provider value={contextValue}>
            {children}
        </AdminContext.Provider>
    );
}

export default AdminContextProvider;

import React, { createContext } from "react";

export const UserContext = createContext();

const UserStore = (props) => {

    const users = {
        name : 'sokkanji',
        job : 'developer'
    };

    return (
        <UserContext.Provider value={users}>{props.children}</UserContext.Provider>
    )
}

export default UserStore;
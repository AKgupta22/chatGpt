import React, { createContext, useState } from 'react';

export const NavbarContext = createContext();

const NavbarContextProvider = (props) => {
    const [defaultOpenKey, setDefaultOpenKey] = useState('');
    const [defaultSelectedKey, setDefaultSelectedKey] = useState('');

    return (
        <NavbarContext.Provider
            value={{
                defaultOpenKey,
                setDefaultOpenKey,
                defaultSelectedKey,
                setDefaultSelectedKey,
            }}
        >
            {props.children}
        </NavbarContext.Provider>
    );
};

export default NavbarContextProvider;

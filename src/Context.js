import React, { useState, useEffect, Children } from 'react';

export const Context = React.createContext({
    theme: 'light',
    setTheme: () => { }
});

export default function ContextComponnent({ children }) {
    const [theme, setTheme] = useState('light');
    return (
        <Context.Provider value={
            {
                theme,
                setTheme
            }
        }>
            {children}
        </Context.Provider>

    );

}
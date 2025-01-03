import Component2 from "./ContextComponent/Component2";
import React, { createContext } from "react";

export var ThemeProvider = createContext();

var UseContext = () => {
    return (
        <section>
            <ThemeProvider.Provider value={{ sgpa: "10.00" }}>
                <h1>This is an example of useContext - Parent Component</h1>
                <Component2 />
            </ThemeProvider.Provider>
        </section>
    );
};

export default UseContext;
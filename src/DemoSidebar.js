import React from "react";

const DemoSidebar = ({ updateSettings, children, togglePause }) => {
    return (
        <div>
            <h3>Settings:</h3>
            <button onClick={togglePause}>Toggle pause</button>
            {children}
        </div>
    );
};

export default DemoSidebar;

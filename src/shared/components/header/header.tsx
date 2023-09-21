import React from "react";
import Navigation from "./navigation/navigation";

import classes from "./header.module.scss";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className="container">
                <Navigation />
            </div>
        </header>
    );
};

export default Header;

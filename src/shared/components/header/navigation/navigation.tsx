"use client";
import React from "react";

import classes from "./navigation.module.scss";

const Navigation = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.navList}>
                <li className={classes.navItem}>
                    <button className={classes.navBtn} type="button">
                        Home
                    </button>
                </li>
                <li className={classes.navItem}>
                    <button className={classes.navBtn} type="button">
                        About
                    </button>
                </li>
                <li className={classes.navItem}>
                    <button className={classes.navBtn} type="button">
                        Projects
                    </button>
                </li>
                <li className={classes.navItem}>
                    <button className={classes.navBtn} type="button">
                        Contact
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;

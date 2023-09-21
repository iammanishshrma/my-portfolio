"use client";
import React from "react";

import classes from "./home.module.scss";

const HomeSection = () => {
    return (
        <section className={classes.home}>
            <div className="container">
                <h1>Hi, I&apos;m Manish Sharma</h1>
                <p>
                    I&apos;m passionate about building beautiful, functional,
                    and user-friendly websites and web applications. I have a
                    strong track record of delivering high-quality work on time
                    and within budget.
                </p>
                <div className={classes.cta}>
                    <button className={classes.contactBtn} type="button">
                        Contact
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomeSection;

import React from 'react';
import { NavBar } from './NavBar';

export const Header = () => {

    return(
        <div className="app_header">
            <div className="app_header_banner">
                <section ><h1>The TAP Site</h1></section>
            </div>
            <div className={"app_header_menu"}>
                <NavBar />
            </div>
        </div>
    );
};
import * as React from "react";
import {Link, Outlet, NavLink} from "react-router-dom";
import './App.css';

const Layout = () => {
    const linkStyle = {
        margin: "0.7rem",
        textDecoration: "none",
        color: "black",
        fontsize: "12px"
    };
    return (
        <>
            <header className={"header_main"}>
                <div className={"header_links"}>
                    <NavLink to={'/'} className={"header_link"}>Главная</NavLink>
                    <NavLink to={'/about_us'} className={"header_link"}>О нас</NavLink>
                    <NavLink to={'/price'} className={"header_link"}>Цены</NavLink>
                    <NavLink to={'/contacts'} className={"header_link"}>Контакты</NavLink>
                </div>
            </header>
            <Outlet/>
        </>
    )
}

export default Layout;
import * as React from "react";
import {Link, Outlet, NavLink} from "react-router-dom";
import './App.css';
import logo from './logo_1.svg';

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
                <img className={"header_logo"} src={logo} alt={"404"}/>
                <div className={"header_links"}>
                    <NavLink to={'/'} className={"header_link"}>Главная</NavLink>
                    <NavLink to={'/price'} className={"header_link"}>Цены</NavLink>
                    <NavLink to={'/contacts'} className={"header_link"}>Контакты</NavLink>
                </div>
            </header>
            <Outlet/>
            <footer className={"main_footer"}>
                <div className={"footer_info"}>
                    ИП Раевский Р.В.
                </div>
            </footer>
        </>
    )
}

export default Layout;
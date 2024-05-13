import React from "react";
import HomePage from "../pages/HomePage";
import Layout from "./Layout";
import {Routes, Route} from "react-router-dom";
import Notfound from "../pages/Notfound_page";
import About from "../pages/About_us";
import Price from "../pages/Price";
import Contacts from "../pages/Contacts";

const App = () => {
  return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'*'} element={<Notfound/>}/>
                <Route path={'/price'} element={<Price/>}/>
                <Route path={'/contacts'} element={<Contacts/>}/>
            </Route>
        </Routes>
  );
}

export default App;

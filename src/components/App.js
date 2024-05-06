import React from "react";
import HomePage from "../pages/HomePage";
import Layout from "./Layout";
import {Routes, Route} from "react-router-dom";
import Notfound from "../pages/Notfound_page";
import About from "../pages/About_us";
import Price from "../pages/Price";

const App = () => {
  return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'*'} element={<Notfound/>}/>
                <Route path={'/about_us'} element={<About/>}/>
                <Route path={'/price'} element={<Price/>}/>
            </Route>
        </Routes>
  );
}

export default App;

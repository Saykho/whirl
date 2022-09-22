import React from 'react';
import "./App.scss";
import "./style/typography.scss";
import { Excerpt } from "./components/Excerpt/Excerpt";
import { Menu } from "./components/Menu/Menu";
import { About } from "./components/About/About";
import { Companies } from "./components/Companies/Companies";
import { QualityItem } from "./components/QualityItem/QualityItem";
import { AboutWhirl } from "./components/AboutWhirl/AboutWhirl";
import { TrackInfo } from "./components/TrackInfo/TrackInfo";
import { Task } from "./components/Task/Task";
import { Posts } from "./components/Posts/Posts";
import { Start } from "./components/Start/Start";
import { Footer } from "./components/Footer/Footer";
import { RelaxInfo } from "./components/RelaxInfo/RelaxInfo";

function App() {
    return (
        <>
            <Excerpt/>
            <Menu/>
            <About/>
            <Companies/>
            <QualityItem/>
            <RelaxInfo/>
            <AboutWhirl/>
            <TrackInfo/>
            <Task/>
            <Posts/>
            <Start/>
            <Footer/>
        </>
    );
}

export default App;

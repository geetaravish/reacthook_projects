import React from 'react';
// import ReactDOM from "react-dom/client";
// import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Header from './Header';
import Body from './Body';
import About from './About.js';
import DataGridComp from './DataGrid.js';

const App = () => {
    return (
        <div>
            <About/>
            <p><DataGridComp /></p>
            <h1><Header /></h1>
            <p><Body /></p>
        </div>
    );
};

// const appRouter = createBrowserRouter();

export default App;
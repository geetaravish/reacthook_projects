import React from 'react';
import ReactDOM from "react-dom/client"; // Correct import for React 18
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './Header';
import Body from './Body';
import About from './About.js';
import DataGridComp from './DataGrid.js';

const App = () => {
    return (
        <div>
            <h1><Header /></h1>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Header />, // Shared wrapper layout
      errorElement: <Header />, // Catch-all error boundaries
      children: [
        { index: true, element: <Body /> }, // Renders at "/"
        { path: 'about', element: <About /> }, // Renders at "/about"
        { path: 'grid', element: <DataGridComp /> }, // Renders at "/grid"
      ],
    },
  ]);

// Correct usage of ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <RouterProvider router={appRouter} />
    </React.StrictMode>
);

export default App;
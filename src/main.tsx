import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MovieCard from './components/MovieCard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>
  },
  {
    path: "/movies",
    element: <MovieCard MovieName={"Test1"} Season={"Test2"} Episode={"Test3"} EpisodeTitle={"Test4"} />
  }
]);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement ?? document.createElement("div"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
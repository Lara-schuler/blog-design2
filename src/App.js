import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Movie from "./pages/movie";
import Categorias from "./pages/categorias";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/:index"  element={<Movie />} />
                <Route path="/categorias"  element={<Categorias />} />
            </Routes>
        </div>
    );
};

export default App;

/*
<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:index" element={<Movie />} />
      </Routes>
</Router> */

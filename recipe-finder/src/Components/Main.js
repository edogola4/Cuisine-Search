import React, { Suspense } from "react";
import "./Main.css";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import RecipeInstruction from "./RecipeInstruction";
import Favourite from "./Favourite";
import SearchList from "./SearchList";

// Loading component for suspense fallback
const Loading = () => (
  <div className="loading">
    <h2>Loading...</h2>
  </div>
);

const Main = () => {
  return (
    <>
      <NavBar />
      <div className="main-content">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/RecipeInstruction/:id" element={<RecipeInstruction />} />
            <Route path="/Favourite" element={<Favourite />} />
            <Route path="/SearchList" element={<SearchList />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

export default Main;

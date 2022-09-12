import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Routing,
} from "react-router-dom";
import MovieHome from "../pages/moviehome/MovieHome";
import MovieDetail from "../pages/moviedetail/MovieDetail";
const Routes = () => {
  return (
    <Router>
      <Routing>
        <Route exact path="/" element={<MovieHome />} />
        <Route exact path="/:title" element={<MovieDetail />} />
      </Routing>
    </Router>
  );
};

export default Routes;
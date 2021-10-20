import "./App.css";
import { Route, Router } from "react-router-dom";
import { Asteroid } from "./../Asteroid/Asteroid";
import { Navbar } from "./../Navbar/Navabar";
// import { AsteroidDetail } from "./../AsteroidDetail/AsteroidDetail";
import history from "./../../routes/history";
import React from "react";
import * as route from "./../../routes/route";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Router history={history}>
        <Route path={route.home} exact>
          <Asteroid />
        </Route>
        {/* <Route path={route.asteroidDetail} exact>
          <AsteroidDetail />
        </Route> */}
      </Router>
    </div>
  );
}

export default App;

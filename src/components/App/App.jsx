import "./App.css";
import { Route, Router } from "react-router-dom";
import { Home } from "./../Home/Home";
import { Navbar } from "./../Navbar/Navabar";
import history from "./../../routes/history";
import React from "react";
import * as route from "./../../routes/route";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Router history={history}>
        <Route path={route.home} exact>
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;

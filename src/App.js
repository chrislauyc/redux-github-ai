import "./App.css";
import "tailwindcss/dist/tailwind.css";
import React from "react";
import {
  AppNav,
  AppHome,
  AppAbout,
  AppRecipes,
  AppChef,
  AppNutrition,
  AppCocktail,
  AppFooter,
  // AppPrivateRoute as PrivateRoute,
} from "./components/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import {ScrollTrigger} from "react-router-scroll-4";

function App() {
  return (
    <Router>
      <div className="App">
        <AppNav />
      </div>

      <Switch>
        <Route exact path={"/"} component={AppHome} />
        <Route path={"/about"} component={AppAbout} />
        <Route path={"/chef"} component={AppChef} />
        <Route exact path={"/recipes"} component={AppRecipes} />
        <Route exact path={"/nutrition"} component={AppNutrition} />
        <Route exact path={"/cocktails"} component={AppCocktail} />
      </Switch>
      <div className={"flex flex-col h-auto"}>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;

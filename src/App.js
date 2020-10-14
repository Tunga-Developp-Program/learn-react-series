import React from "react";
import BlogPreview from "./components/BlogPreview";
import Navigation from "./components/Navigation";
import AddBlog from "./pages/AddBlog";
import LoginPage from "./pages/LoginPage";
import logo from "./assets/img/logo.jpeg"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// look at hash router from react-router-dom ...
// have a simple writeup on the difference and how to approach.
const App = () => {
  return (
    <>
    
      <Router>
        <Navigation></Navigation>
        <main>
        <Switch>
          <Route path="/" exact>
            <h1>Am at home</h1>
          </Route>
          <Route path="/addblog" >
            <AddBlog />
          </Route>
          <Route path="/login" >
            <LoginPage />
          </Route>
          <Route path="/single" >
           
            <BlogPreview  />
          </Route>
        </Switch>
        </main>
      </Router>
    </>
  );
};

export default App;

// have a 404 page which loads when the path that user passed is not availabe
// React-router : atleast .
// useState, useEffect hooks

//TODO https://reactrouter.com/

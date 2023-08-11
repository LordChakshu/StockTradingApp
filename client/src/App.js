import React, { Component } from "react";
import Signup from "./components/auth/signup";
import Navbar from "./components/layout/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login";
import Home from "./components/layout/homepage";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/home" Component={Home} />
            <Route exact path="/signup" Component={Signup} />
            <Route exact path="/login" Component={Login} />
          </Routes>
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

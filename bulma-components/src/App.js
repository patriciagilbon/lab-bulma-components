import './App.css';
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/signup";
import Login from "./components/login";
import Doc from "./components/documentation";

import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/documentation" element={<Doc />} />
    </Routes>
    </div>
  );
}

export default App;

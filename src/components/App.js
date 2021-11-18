import React from "react";
import Header from "./Header"
import MoodBoard from "./MoodBoard"
import ToDoList from "./ToDoList"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Header />
      <Routes>
          <Route exact path="/moodboard">
            <MoodBoard />
          </Route>
          <Route exact path="/to-do-list">
            <ToDoList />
          </Route>
      </Routes>
    </div>
  );
}

export default App;

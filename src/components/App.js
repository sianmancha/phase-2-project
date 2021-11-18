import React from "react";
import Header from "./Header"
import MoodBoard from "./MoodBoard"
import ToDoList from "./ToDoList"
import Home from "./Home";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Switch>
          <Route exact path="/moodboard" >
            <MoodBoard />
          </Route>
          <Route exact path="/to-do-list" >
            <ToDoList />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>

      </Switch>
    </div>
  );
}


export default App;

// element={<MoodBoard />}/>
// element={<ToDoList />}

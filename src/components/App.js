import React from "react";
import Header from "./Header"
import MoodBoard from "./MoodBoard"
import ToDoList from "./ToDoList"
import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Header />
      <Switch>
          <Route exact path="/moodboard" >
            <MoodBoard />
          </Route>
          <Route exact path="/to-do-list" >
            <ToDoList />
          </Route>

      </Switch>
    </div>
  );
}


export default App;

// element={<MoodBoard />}/>
// element={<ToDoList />}

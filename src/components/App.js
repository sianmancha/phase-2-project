import React from "react";
import Header from "./Header"
import MoodBoard from "./MoodBoard"
import ToDoList from "./ToDoList"
import Home from "./Home";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom"
// import Amplify from 'aws-amplify';
// import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react-v1';




function App() {
  return (
    <div>
      {/* <header className="App-header">
        <AmplifySignOut />
        <h2>My App Content</h2>
      </header> */}
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


// export default withAuthenticator(App);
export default App;
// element={<MoodBoard />}/>
// element={<ToDoList />}

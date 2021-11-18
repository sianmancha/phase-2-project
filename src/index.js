import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Route } from "react-router-dom"


ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/">
      <App />
    </Route>
  </BrowserRouter>,
  document.getElementById("root")
);

// ReactDOM.render(
//     <BrowserRouter>
//       <App />,
//     </BrowserRouter>, 
//   document.getElementById('root')
// );



import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from "react-router-dom"
import "./index.css"
// import { Authenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';

ReactDOM.render(
  <BrowserRouter>
    {/* <Authenticator> */}
      <App />
    {/* </Authenticator> */}
  </BrowserRouter>,
  document.getElementById("root")
);

// ReactDOM.render(
//     <BrowserRouter>
//       <App />,
//     </BrowserRouter>, 
//   document.getElementById('root')
// );


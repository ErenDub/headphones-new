import React from "react";
import AllPage from "./components/allPage";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
         <Route path='/' exact component={AllPage} />
        </Switch>
      </BrowserRouter>
      
    </>
  );
}

export default App;

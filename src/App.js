import React from 'react'
import {Route, Switch} from "react-router-dom";
import {ChallengesList} from "./components/ChallengesList";
import {Challenge} from "./components/Challenge";
import {NewChallenge} from "./components/NewChallenge";


function App() {
  return (
    <Switch>
      <Route exact path="/" component={ChallengesList} />
      <Route path="/challenge/:challengeId" component={Challenge} />
      <Route path="/new-challenge" component={NewChallenge} />
    </Switch>
  );
}

export default App;

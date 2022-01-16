import React from 'react';
import { Route, Switch } from "react-router-dom";

import ProtectedWrapper from './components/ProtectedWraper';
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import QuestionList from './components/QuestionList';
import NewQuestion from './components/NewQuestion';
import LeaderBoard from './components/LeaderBoard';
import * as paths from './paths';
import { useQuestionsFetch, useUsersFetch } from './hooks/api';

function App() {
  useUsersFetch();
  useQuestionsFetch();

  return (
    <div className="md:container md:mx-auto">
      <Header/>
      <Switch>
        <Route path={paths.LOGIN}>
          <LoginForm redirectTarget={paths.ROOT} />
        </Route>
        <Route path={paths.NEW_QUESTION}>
          <ProtectedWrapper>
            <NewQuestion redirectTarget={paths.NEW_QUESTION} />
          </ProtectedWrapper>
        </Route>
        <Route path={paths.LEADERBOARD}>
          <ProtectedWrapper redirectTarget={paths.LEADERBOARD}>
            <LeaderBoard/>
          </ProtectedWrapper>
        </Route>
        <Route path={paths.ROOT}>
          <QuestionList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

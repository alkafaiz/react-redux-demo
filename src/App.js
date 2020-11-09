import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import IndexPage from "./pages";
import withTheme from "./styles/withTheme";
import { compose } from "redux";
import withRedux from "./redux/withRedux";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/">
          <IndexPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default compose(withRedux, withTheme)(App);

import "./App.css";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import IndexPage from "./pages";
import PostPage from "./pages/post";
import UsersPage from "./pages/users";
import withTheme from "./styles/withTheme";
import { compose } from "redux";
import withRedux from "./redux/withRedux";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Redirect exact from="/posts" to="/" />
        <Route path="/posts/:postId" component={PostPage} />
        <Route path="/users" component={UsersPage} />
      </Switch>
    </Router>
  );
};

export default compose(withRedux, withTheme)(App);

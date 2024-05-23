import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import News from "./News";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

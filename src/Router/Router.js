import { Route, Switch } from "react-router-dom";
import { Home, Upload } from "routes";

export function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/upload" component={Upload} />
    </Switch>
  );
}

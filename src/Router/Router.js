import { Route, Switch } from "react-router-dom";
import { Home, Upload } from "routes";

/**
 * Controls the rendering of components depenidng on the
 * page route
 */
export function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/upload" component={Upload} />
    </Switch>
  );
}

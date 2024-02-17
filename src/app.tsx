// @refresh reload
import { Navigate, Route, RouteSectionProps, Router } from "@solidjs/router";

import "./app.css";
import Header from "./components/Header";
import Home from "./routes";
import { Component } from "solid-js";
import Login from "./routes/login";
import BrokerTab from "./components/BrokerTab";
import QueueTab from "./components/QueueTab";
import Broker from "./routes/brokers/[name]";
import Visualiser from "./routes/visual";
import Queues from "./routes/queues/[name]";
import AccountsTab from "./routes/accounts";
import Account from "./routes/accounts/[name]";
import CreateAccount from "./routes/create/account";
import CreateRole from "./routes/create/role";
import CreateRoute from "./routes/create/route";
import RoleAssign from "./routes/role/assign";
import RoleUnassign from "./routes/role/unassign";
import NotFound from "./routes/[...404]";
import { ProtectedRoute } from "./components/protected/ProtectedRoute";

const NavApp: Component<RouteSectionProps<unknown>> = (props) => {
  const { pathname } = props.location;

  console.log(pathname)

  if (pathname === "/login" || pathname === "/page-missing") {
    return <>{props.children}</>;
  }

  // Render the Header component for other paths
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default function App() {
  return (
    <Router root={NavApp}>
      <Route path="/" component={ProtectedRoute(Home)} />
      <Route path="/login" component={Login} />
      <Route path="/visual" component={ProtectedRoute(Visualiser)} />
      <Route path="/brokers" component={ProtectedRoute(BrokerTab)} />
      <Route path="/brokers/:name" component={ProtectedRoute(Broker)} />
      <Route path="/queues" component={ProtectedRoute(QueueTab)} />
      <Route path="/queues/:name" component={ProtectedRoute(Queues)} />
      <Route path="/accounts" component={ProtectedRoute(AccountsTab)} />
      <Route path="/accounts/:name" component={ProtectedRoute(Account)} />
      <Route path="/create/account" component={ProtectedRoute(CreateAccount)} />
      <Route path="/create/role" component={ProtectedRoute(CreateRole)} />
      <Route path="/create/route" component={ProtectedRoute(CreateRoute)} />
      <Route path="/role/assign" component={ProtectedRoute(RoleAssign)} />
      <Route path="/role/unassign" component={ProtectedRoute(RoleUnassign)} />
      <Route path="/page-missing" component={NotFound} />
      <Route
        path="*404"
        component={() => <Navigate href={"/page-missing"} />}
      />
    </Router>
  );
}

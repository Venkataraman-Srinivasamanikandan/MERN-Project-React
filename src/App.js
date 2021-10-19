import React, { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Col } from "reactstrap";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProtectedRoute from "./helper/protectedRoute";

import Login from "./pages/login/login";
import Sidebar from "./pages/sidebar/sidebar";
import Navigationbar from "./pages/navbar/navbar";

const Dashboard = lazy(() => import("./pages/dashboard/dashboard"));
const Metatag = lazy(() => import("./pages/metatag/metatag"));

const styles = {
  contentDiv: {
    display: "flex",
  },
  contentMargin: {
    marginLeft: "10px",
    width: "100%",
  },
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/(login)" component={LoginContainer} />
        <Route component={DefaultContainer} />
      </Switch>
    </Router>
  )
}

const LoginContainer = () => (
  <div className="container">
    <Route exact path="/" render={() => <Redirect to="/login" />} />
    <Route path="/login" component={Login} />
  </div>
)


const DefaultContainer = () => (
  <main>
    <Col>
      <Navigationbar />
    </Col>
    <div style={styles.contentDiv}>
      <Sidebar />
      <div style={styles.contentMargin}>
        <Suspense fallback={<h1>Loding...</h1>}>
          <ProtectedRoute path="/dashboard">
            <Dashboard />
          </ProtectedRoute>
          <ProtectedRoute path="/metatag">
            <Metatag />
          </ProtectedRoute>
          <Redirect exact from="/" to="dashboard" />
          <Route path="*">
            <Redirect from="/" to="dashboard" />
          </Route>
        </Suspense>
      </div>
    </div>
  </main>
)
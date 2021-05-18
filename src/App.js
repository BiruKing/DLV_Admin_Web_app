import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import "../public/styles/App.css";
//import NavBar from "./components/Navbar";
import Login from "./Pages/Login";
import Statistics from "./Pages/Statistics";
import AddTraffics from "./Pages/AddTrafics";
import UpdateTraffics from "./Pages/UpdateTrafic";
import ViewTraffics from "./Pages/ViewTrafics";
import RemoveTraffics from "./Pages/RemoveTrafic";
import Reports from "./Pages/Reports";
import Home from "./Pages/Home";
//import Lo from "./Pages/Temp/Lo";
function App() {
  return (
    <div className="App">
      {
        <Router>
          <Switch>
            <Route path="/" exact component={Login}></Route>
            <Route path="/statistics" exact component={Statistics}></Route>
            <Route path="/reports" exact component={Reports}></Route>
            <Route path="/addTraffics" exact component={AddTraffics}></Route>
            <Route
              path="/updateTraffics"
              exact
              component={UpdateTraffics}
            ></Route>
            <Route path="/viewTraffics" exact component={ViewTraffics}></Route>
            <Route
              path="/removeTraffics"
              exact
              component={RemoveTraffics}
            ></Route>
            <Route path="/Home" exact component={Home}></Route>
          </Switch>
        </Router>
      }
    </div>
  );
}

export default App;

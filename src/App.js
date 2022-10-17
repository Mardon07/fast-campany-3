import React from "react";
import { Route, Switch } from "react-router-dom";
import Users from "./component/users";
import Main from "./component/main";
import Login from "./component/login";
import NavBar from "./component/navBar";
import User from "./component/user";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:postId" component={User} />
                <Route path="/users" component={Users} />
            </Switch>
        </>
    );
}

export default App;

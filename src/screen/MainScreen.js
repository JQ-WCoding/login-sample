import React from "react";
import {HashRouter as Router, NavLink, Route, Routes} from "react-router-dom";
import SignInForm from "../pages/SiginForm";
import SignUpForm from "../pages/SignUpForm";


const MainScreen = () => {
    return (
        <Router path="/main">
            <div className="App">
                <div className="appAside"/>
                <div className="appForm">
                    <div className="pageSwitcher">
                        <NavLink to="/sign-in" activeclassname="pageSwitcherItem-active" className="pageSwitcherItem">
                            Sign In
                        </NavLink>
                        <NavLink exact="true" to="/" activeclassname="pageSwitcherItem-active" className="pageSwitcherItem">
                            Sign Up
                        </NavLink>
                    </div>

                    <div className="formTitle">
                        <NavLink to="/sign-in" activeclassname="formTitleLink-active" className="formTitleLink">
                            Sign In
                        </NavLink>{" "}
                        or{" "}
                        <NavLink exact="true" to="/" activeclassname="formTitleLink-active" className="formTitleLink">
                            Sign Up
                        </NavLink>
                    </div>

                    <Routes>
                        <Route exact="true" path="/" component={SignUpForm}/>
                        <Route path="/sign-in" component={SignInForm}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default MainScreen;

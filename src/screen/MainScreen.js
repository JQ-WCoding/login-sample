import React from "react";
import {HashRouter, NavLink, Route, Routes} from "react-router-dom";
import SignInForm from "../pages/SiginForm";
import SignUpForm from "../pages/SignUpForm";


const MainScreen = () => {
    const activeFormTitleLink = "formTitleLink-active";
    const formTitleLink = "formTitleLink";

    return (
        <>
            <HashRouter path="/main">
                <div className="App">
                    <div className="appAside"/>
                    <div className="appForm">

                        <div className="formTitle">
                            {/*NavLink 사용 이유 : 활성화된 부분에 대해서 따로 디자인 요소를 부여*/}
                            <NavLink to="/sign-in" className={( {isActive} ) => ( isActive ? activeFormTitleLink : formTitleLink )}>
                                Sign In
                            </NavLink>{" "}
                            or{" "}
                            <NavLink exact="true" to="/" className={( {isActive} ) => ( isActive ? activeFormTitleLink : formTitleLink )}>
                                Sign Up
                            </NavLink>
                        </div>

                        <Routes>
                            <Route exact="true" path="/" element={<SignUpForm/>}/>
                            <Route path="/sign-in" element={<SignInForm/>}/>
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        </>
    );
}

export default MainScreen;

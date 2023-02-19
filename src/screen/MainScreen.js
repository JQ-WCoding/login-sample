import React, {useEffect, useState} from "react";
import {BrowserRouter, HashRouter, NavLink, Route, Routes} from "react-router-dom";
import SignInForm from "../pages/SiginForm";
import SignUpForm from "../pages/SignUpForm";
import BoardList from "../pages/BoardList";
import BoardWrite from "../pages/BoardWrite";


const MainScreen = () => {
    const [showBoard, setShowBoard] = useState(false);
    const [userId, setUserId] = useState(localStorage.getItem('userId'));


    const activeFormTitleLink = "formTitleLink-active";
    const formTitleLink = "formTitleLink";

    useEffect(() => {
        const url = window.location.href;
        const splitUrl = url.split('/');
        const location = splitUrl[splitUrl.length - 1];
        console.log(location);

        if (location === 'board' || location === 'board-write') {
            if (userId === null) {
                window.location.href = '/';
                return;
            }

            setShowBoard(true);
        } else {
            setShowBoard(false);
        }

    }, [window.location.href, userId]);


    return (
        <>
            <BrowserRouter path="/main">
                <div className="App">
                    <div className="appAside"/>
                    <div className="appForm">

                        {!showBoard && <div className="formTitle">
                            {/*NavLink 사용 이유 : 활성화된 부분에 대해서 따로 디자인 요소를 부여*/}
                            {/* isActive는 react 버전에 따라 다르게 사용해야할 수도 있음 */}
                            <NavLink to="/sign-in"
                                     className={({isActive}) => (isActive ? activeFormTitleLink : formTitleLink)}>
                                Sign In
                            </NavLink>{" "}
                            or{" "}
                            <NavLink exact="true" to="/"
                                     className={({isActive}) => (isActive ? activeFormTitleLink : formTitleLink)}>
                                Sign Up
                            </NavLink>
                        </div>}

                        {/* 라우팅 */}
                        <Routes>
                            <Route exact="true" path="/" element={<SignUpForm/>}/>
                            <Route path="/sign-in" element={<SignInForm/>}/>
                            <Route path="/board" element={<BoardList/>}/>
                            <Route path="/board-write" element={<BoardWrite/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}

export default MainScreen;
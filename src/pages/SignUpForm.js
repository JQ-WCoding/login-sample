import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const SignUpForm = () => {

    const [loginInfo, setLoginIngfo] = useState( {
        userName    : '',
        userId      : '',
        userPassword: ''
    } );


    const handleSubmit = () => {
        // 회원가입 이동 url 이용하여 신청예정
        axios.post( '/users/add', loginInfo ).then( ( res ) => {
            console.log( res );
        } ).catch( ( res ) => {
            console.log( res );
        } );
    }

    /**
     * input 변경 핸들러
     * @param target
     * @description target 객체를 이용해 name은 input 태그의 name, value는 input 태그의 value를 매개변수(파라미터)로 이용
     */
    const handleChange = ( {target} ) => {
        const info = {
            ...loginInfo,
            [target.name]: target.value
        }

        setLoginIngfo( info );
    }

    return (
        <div className="formCenter">
            <form onSubmit={handleSubmit} className="formFields">
                <div className="formField">
                    <label className="formFieldLabel" htmlFor="name">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="userName"
                        className="formFieldInput"
                        placeholder="Enter your full name"
                        name="userName"
                        value={loginInfo.userName}
                        onChange={handleChange}
                    />
                </div>
                <div className="formField">
                    <label className="formFieldLabel" htmlFor="userId">
                        ID
                    </label>
                    <input
                        type="text"
                        id="userId"
                        className="formFieldInput"
                        placeholder="Enter your userId"
                        name="userId"
                        value={loginInfo.userId}
                        onChange={handleChange}
                    />
                </div>
                <div className="formField">
                    <label className="formFieldLabel" htmlFor="userPassword">
                        Password
                    </label>
                    <input
                        type="password"
                        id="userPassword"
                        className="formFieldInput"
                        placeholder="Enter your password"
                        name="userPassword"
                        value={loginInfo.userPassword}
                        onChange={handleChange}
                    />
                </div>

                <div className="formField">
                    <button className="formFieldButton">Sign Up</button>
                    {" "}
                    <Link to="/sign-in" className="formFieldLink">
                        I'm already member
                    </Link>
                </div>
            </form>
        </div>
    );
}
export default SignUpForm;

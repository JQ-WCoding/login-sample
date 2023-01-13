import React, {Component, useState} from "react";
import {Link} from "react-router-dom";

const SignUpForm = () => {
    // constructor( props ) {
    //     super( props );
    //
    //     this.state = {
    //         userId: "",
    //         userPassword: "",
    //         name: "",
    //         hasAgreed: false
    //     };
    //
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }
    //
    // handleChange(event) {
    //     let target = event.target;
    //     let value = target.type === "checkbox" ? target.checked : target.value;
    //     let name = target.name;
    //
    //     this.setState({
    //         [name]: value
    //     });
    // }
    //
    // handleSubmit(e) {
    //     e.preventDefault();
    //
    //     console.log("The form was submitted with the following data:");
    //     console.log(this.state);
    // }

    const [userId, setUserId] = useState( '' );
    const [userPassword, setUserPassword] = useState( '' );
    const [userName, setUserName] = useState( '' );


    const handleSubmit = (args) => {
        debugger;
        // 회원가입 이동 url 이용하여 신청예정
    }

    /**
     * input 변경 핸들러
     * @param target
     * @description target 객체를 이용해 name은 input 태그의 name, value는 input 태그의 value를 매개변수(파라미터)로 이용
     */
    const handleChange = ( {target} ) => {
        const value = target.value;

        switch ( target.name ) {
            case 'name':
                setUserName( value );
                break;
            case 'userId':
                setUserId( value );
                break;
            case 'userPassword':
                setUserPassword( value );
                break;
            default:
                console.log( 'error' );
                break;
        }
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
                        id="name"
                        className="formFieldInput"
                        placeholder="Enter your full name"
                        name="name"
                        value={userName}
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
                        value={userId}
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
                        value={userPassword}
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

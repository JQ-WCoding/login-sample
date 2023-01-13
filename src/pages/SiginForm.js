import React, {Component} from "react";
import {Link} from "react-router-dom";

class SignInForm extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            userId  : "",
            userPassword: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let target = event.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        // submit 새로 고침 방지
        event.preventDefault();

        console.log("The form was submitted with the following data:");
        console.log(this.state);

        // localStorage 에 저장 안녕하세요 할 예정
    }

    render() {
        return (
            <div className="formCenter">
                <form className="formFields" onSubmit={this.handleSubmit}>
                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="userId">
                            ID
                        </label>
                        <input
                            type="text"
                            id="userId"
                            className="formFieldInput"
                            placeholder="Enter your ID"
                            name="userId"
                            value={this.state.userId}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="formField">
                        <label className="formFieldLabel" htmlFor="userPassword">
                            Password
                        </label>
                        <input
                            type="userPassword"
                            id="userPassword"
                            className="formFieldInput"
                            placeholder="Enter your userPassword"
                            name="userPassword"
                            value={this.state.userPassword}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="formField">
                        <button className="formFieldButton">Sign In</button>{" "}
                        <Link to="/" className="formFieldLink">
                            Create an account
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignInForm;

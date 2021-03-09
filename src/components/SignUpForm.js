import React, { Component } from "react";

import TextField from "./TextField";
import Email from "./Email";
import Password from "./Password";
import Checkbox from "./Checkbox";
import Button from "./Button";

import * as validations from "../validations/formValidations";

class SignUpForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  };

  get fieldInfo() {
    return {
      firstName: {
        id: "firstName",
        placeholder: "Enter First Name",
        errorMessage: "Please enter valid First Name",
      },
      lastName: {
        id: "lastName",
        placeholder: "Enter Last Name",
        errorMessage: "Please enter valid Last Name",
      },
      email: {
        id: "email",
        placeholder: "Enter Emailid",
        errorMessage: "Please enter valid Emailid",
      },
      newPassword: {
        id: "newPassword",
        placeholder: "Enter New Password",
        errorMessage: "Please enter valid password",
      },
      confirmPassword: {
        id: "confirmPassword",
        placeholder: "Enter Password",
        errorMessage: "Passwords do not match",
      },
      checkbox: {
        id: "agreeTerms",
        labelName: "I accept the Terms",
      },
      submitButton: {
        name: "Sign Up",
      },
    };
  }

  handleTextFieldChange = ({ target }) => {
    if (target.getAttribute("id") === this.fieldInfo.firstName.id) {
      let validation = validations.name(target.value);
      this.setState(
        validation
          ? { firstName: target.value }
          : { firstName: this.state.firstName }
      );
    }
    if (target.getAttribute("id") === this.fieldInfo.lastName.id) {
      let validation = validations.name(target.value);
      this.setState(
        validation
          ? { lastName: target.value }
          : { lastName: this.state.lastName }
      );
    }
  };

  handleEmailFieldChange = ({ target }) => {
    let validation = validations.email(target.value);
    this.setState(
      validation ? { email: target.value } : { email: this.state.email }
    );
  };

  handlePasswordFieldChange = ({ target }) => {
    if (target.getAttribute("id") === this.fieldInfo.newPassword.id) {
      let validation = validations.password(target.value);
      this.setState(
        validation
          ? { password: target.value }
          : { password: this.state.password }
      );
    }
    if (target.getAttribute("id") === this.fieldInfo.confirmPassword.id) {
      let validation = validations.password(target.value);
      this.setState(
        validation
          ? { confirmPassword: target.value }
          : { confirmPassword: this.state.confirmPassword }
      );
    }
  };

  handleAceeptTermsFieldChange = ({ target }) => {
    this.setState({ agreeTerms: target.checked });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    //API CALL
  };

  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-center">SignUp From</h1>
        <form
          action=""
          method="get"
          className="mt-5"
          id="submit-form"
          onSubmit={this.handleFormSubmit}
        >
          <TextField
            id={this.fieldInfo.firstName.id}
            labelName={this.fieldInfo.firstName.labelName}
            placeholder={this.fieldInfo.firstName.placeholder}
            errorMessage={this.fieldInfo.firstName.errorMessage}
            value={this.state.firstName}
            handleChange={this.handleTextFieldChange}
          />
          <TextField
            id={this.fieldInfo.lastName.id}
            labelName={this.fieldInfo.lastName.labelName}
            placeholder={this.fieldInfo.lastName.placeholder}
            errorMessage={this.fieldInfo.lastName.errorMessage}
            value={this.state.lastName}
            handleChange={this.handleTextFieldChange}
          />
          <Email
            id={this.fieldInfo.email.id}
            labelName={this.fieldInfo.email.labelName}
            placeholder={this.fieldInfo.email.placeholder}
            errorMessage={this.fieldInfo.email.errorMessage}
            value={this.state.email}
            handleChange={this.handleEmailFieldChange}
          />
          <Password
            id={this.fieldInfo.newPassword.id}
            labelName={this.fieldInfo.newPassword.labelName}
            placeholder={this.fieldInfo.newPassword.placeholder}
            errorMessage={this.fieldInfo.newPassword.errorMessage}
            value={this.state.newPassword}
            handleChange={this.handlePasswordFieldChange}
          />
          <Password
            id={this.fieldInfo.confirmPassword.id}
            labelName={this.fieldInfo.confirmPassword.labelName}
            placeholder={this.fieldInfo.confirmPassword.placeholder}
            errorMessage={this.fieldInfo.confirmPassword.errorMessage}
            value={this.state.confirmPassword}
            handleChange={this.handlePasswordFieldChange}
          />
          <Checkbox
            id={this.fieldInfo.checkbox.id}
            labelName={this.fieldInfo.checkbox.labelName}
            handleChange={this.handleAceeptTermsFieldChange}
          />
          <Button name={this.fieldInfo.submitButton.name} />
        </form>
      </div>
    );
  }
}

export default SignUpForm;

import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import  { Redirect ,withRouter} from 'react-router-dom'

class FormsPage extends React.Component {
  state = {
    name: "",
    phoneNumber: "",
    email: "",
    gender: "",
    age: "",
    agree: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    e.target.className += " was-validated";
   
    let name = this.state.name;
    let phoneNumber = this.state.phoneNumber;
    let email = this.state.email;
    let gender = this.state.gender;
    let age = this.state.age;
    let data = {name,phoneNumber,email,gender,age};
    if(age>18 && gender && name && phoneNumber && email){
      this.props.history.push(`/display/${this.state.age}`)
     }     
}


handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
}
  render() {
    return (
      <div>
        <form
          className="needs-validation"
          onSubmit={this.handleSubmit}
          noValidate
        >
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
                Name
              </label>
              <input
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="name" 
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
            

        <div className="custom-control custom-radio">
          <input
            type="radio"
            className="custom-control-input"
            id="customControlValidation2"
            name="gender"
            checked={this.state.gender === "Male"}
            onChange={this.handleChange}
            required
            value="Male"
          />
          <label
            className="custom-control-label"
            htmlFor="customControlValidation2"
          >
           Male
          </label>
        </div>
        <div className="custom-control custom-radio mb-3">
          <input
            type="radio"
            className="custom-control-input"
            id="customControlValidation3"
            name="gender"
            checked={this.state.gender === "Female"}
            onChange={this.handleChange}
            required
            value="Female"
          />
          <label
            className="custom-control-label"
            htmlFor="customControlValidation3"
          >
           Female
          </label>
          <div className="invalid-feedback">
            Please select a choice
          </div>
        </div>

            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                Email
              </label>
              <input
                value={this.state.email}
                onChange={this.handleChange}
                type="email"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="email"
                placeholder="Your Email address"
                required
              />
              
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Phone Number
              </label>
              <input
                value={this.state.phoneNumber}
                onChange={this.handleChange}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="phoneNumber"
                placeholder="Phone"
                pattern="^\d{10}$"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid phone Number.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Age
              </label>
              <input
                value={this.state.age}
                onChange={this.handleChange}
                type="number"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="age"
                placeholder="Age"
                min="18" max="90"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid age.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            
          </MDBRow>
          <MDBCol md="4" className="mb-3">
            <div className="custom-control custom-checkbox pl-3">
              <input
                className="custom-control-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="custom-control-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </MDBCol>
          <MDBBtn gradient="purple"  type="submit">
            Submit Form
          </MDBBtn>
        </form>
      </div>
    );
  }
}

export default withRouter(FormsPage);
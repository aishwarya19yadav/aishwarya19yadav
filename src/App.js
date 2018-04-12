import React, { Component } from 'react';
import { Button, Form, p, Label, Input } from 'reactstrap';
import Modal from 'react-modal';
import './App.css';


const Display = (props) => {
  return(
    <center>
    <div className="jumbotron1">
    <h3>Student Information</h3>
    <div className="div3">
      <p>{props.array[0]} <span> {props.array[1]}</span></p>
      <br/>
      <p>{props.array[2]}</p>
      <br/>
      <p>{props.array[3]}</p>
      <br/>
      <p>{props.array[4]}</p>
      <br/>
      <p>{props.array[5]}</p>
      <br/>
      <p>{props.array[6]}</p>
      <br/>
      <p>{props.array[7]}</p>
    </div>
    <br />
    </div>
    </center>
  );
}


class App extends Component {
  constructor (props) {
    super(props)
    this.changeFName = this.changeFName.bind(this)
    this.changeLName = this.changeLName.bind(this)
    this.changeAge = this.changeAge.bind(this)
    this.changeGenderM = this.changeGenderM.bind(this)
    this.changeGenderF = this.changeGenderF.bind(this)
    this.changeSchoolCollege = this.changeSchoolCollege.bind(this)
    this.changeRegistration = this.changeRegistration.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePhoneNo = this.changePhoneNo.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      FName: '',
      LName: '',
      Age: -1,
      Gender: '',
      SchoolCollege: '',
      Registration: '',
      Email: '',
      PhoneNo: -1,
      array:[],
      isActive: false,
    }
  }

  componentWillMount(){
    Modal.setAppElement('body');
  }

  changeFName (e) {
    this.setState({ FName: e.target.value })
  }

  changeLName (e) {
    this.setState({ LName: e.target.value })
  }

  changeAge (e) {
    this.setState({ Age: e.target.value })
  }

  changeGenderM (e) {
    this.setState({ Gender: 'Male' })
  }

  changeGenderF (e) {
    this.setState({ Gender: 'Female' })
  }

  changeSchoolCollege (e) {
    this.setState({ SchoolCollege: e.target.value })
  }

  changeRegistration (e) {
    this.setState({ Registration: e.target.value })
  }

  changeEmail (e) {
    this.setState({ Email: e.target.value })
  }

  changePhoneNo (e) {
    this.setState({ PhoneNo: e.target.value })
  }

  handleSubmit (e) {
    e.preventDefault()
     const fname = this.state.FName;
     const lname = this.state.LName;
     const age = this.state.Age;
     const gender = this.state.Gender;
     const schoolcollege = this.state.SchoolCollege;
     const registration = this.state.Registration;
     const email = this.state.Email;
     const phoneno = this.state.PhoneNo;
     const toggle = this.state.toggle;
     const letters = /^[A-Za-z]+$/;
     const numbers = /^[0-9]+$/;
     if(fname.match(letters) && lname.match(letters) && age > 0 && age < 140 && schoolcollege.match(letters) && registration.match(numbers) && phoneno.match(numbers)){
       document.getElementById("clear").reset();
       const arr=[fname,lname,age,gender,schoolcollege,registration,email,phoneno];

       this.setState({ array: arr})
     }
     else{
       this.setState({
         isActive: !this.state.isActive,
         toggle: "false"
       })
     }
  }

  render () {
    return (
      <div>
        <h1 className="App-title">Student Portal</h1>
        <div className="div1">
        <center>
          <Form onSubmit={this.handleSubmit} className="jumbotron1" id="clear">
            <div className="div3">
            <p>
              <Label for="nfame">First Name</Label>
              <Input type="text" name="FName" id="fname" onChange={this.changeFName.bind(this)} required />
            </p>
            <p>
              <Label for="lname">Last Name</Label>
              <Input type="text" name="LName" id="lname" onChange={this.changeLName.bind(this)} required />
            </p>
            <p>
              <Label for="age">Age</Label>
              <Input type="number" name="Age" id="age" onChange={this.changeAge.bind(this)} required/>
            </p>
            <p>
              <Label for="gender">Gender</Label>
              <Input type="radio" name="Gender" id="gender"  onChange={this.changeGenderM.bind(this)}/>Male
              <Input type="radio" name="Gender" id="gender" onChange={this.changeGenderF.bind(this)}/>Female
            </p>
            <p>
              <Label for="schoolcollege">School/College Name</Label>
              <Input type="text" name="SchoolCollege" id="schoolcollege" onChange={this.changeSchoolCollege.bind(this)} required />
            </p>
            <p>
              <Label for="registration">Registration Number</Label>
              <Input type="number" name="Registration" id="registration" onChange={this.changeRegistration.bind(this)} required />
            </p>
            <p>
              <Label for="email">Email</Label>
              <Input type="email" name="Email" id="email" onChange={this.changeEmail.bind(this)} required />
            </p>
            <p>
              <Label for="phoneno">Phone Number</Label>
              <Input type="Contact" name="PhoneNo"  id="phoneno" onChange={this.changePhoneNo.bind(this)} required />
            </p>
            </div>
            <div className="button">
              <center><Button className="sub">Submit</Button></center>
            </div>
          </Form>
          </center>
        </div>
        <Modal isOpen={this.state.isActive} onRequestClose={this.handleSubmit}>
          <center>
            <div className="vertical-align">
              Please check your details! Something seems wrong!
              <br />
              <em>Check for numbers or special characters in Name or School/College Name</em>
              <br />
              <Button onClick={this.handleSubmit} className="sub">Close</Button>
            </div>
          </center>
        </Modal>
        <div className="div2">
          <Display array={this.state.array}/>
        </div>
      </div>

    );
  }
}

export default App;

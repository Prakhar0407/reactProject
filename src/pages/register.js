import React, { Fragment } from 'react';

// class Home extends React.Component{
    function register(){
    // render()
        return(
            <Fragment>

<section class="container">
      <header>Registration Form</header>
      <form action="#" class="form">
        <div class="input-box">
          <label>First Name</label>
          <input type="text" placeholder="Enter full name" required />
        </div>

        <div class="input-box">
          <label>Last Name</label>
          <input type="text" placeholder="Enter full name" required />
        </div>


        <div class="input-box">
          <label>Email Address</label>
          <input type="text" placeholder="Enter email address" required />
        </div>

        <div class="input-box">
          <label>Password</label>
          <input type="text" placeholder="Enter password" required />
        </div>
      <div class="input-box">
          <label>Confirm Password</label>
          <input type="text" placeholder="Enter password again" required />
        </div> 

         <div class="column">
          <div class="input-box">
            <label>Phone Number</label>
            <input type="number" placeholder="Enter phone number" required />
          </div>
          <div class="input-box">
            <label>Birth Date</label>
            <input type="date" placeholder="Enter birth date" required />
          </div>
        </div> 
        <div class="gender-box">
          <h3>Gender</h3>
          <div class="gender-option">
            <div class="gender">
              <input type="radio" id="check-male" name="gender" checked />
              <label for="check-male">Male</label>
            </div>
            <div class="gender">
              <input type="radio" id="check-female" name="gender" />
              <label for="check-female">Female</label>
            </div>
            <div class="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">prefer not to say</label>
            </div>
          </div>
        </div> 
        <div class="input-box address">
          <label>Address</label>
          <input type="text" placeholder="Enter address" required />
          <div class="column">
            <div class="select-box">
              <select>
                <option hidden>Country</option>
                <option>India</option>
                <option>America</option>
                <option>Australia</option>
                <option>Nepal</option>
                <option>Japan</option>
              </select>
            </div>
            <input type="text" placeholder="Enter your city" required />
          </div>
          <div class="column">

            <input type="number" placeholder="Enter postal code" required />
          </div>
        </div> 
        <button>Submit</button>
      </form>
    </section>

            </Fragment>


);
}


export default register;
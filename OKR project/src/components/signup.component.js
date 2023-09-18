import React, { Component,Fragment } from 'react'

export default class SignUp extends Component {
  render() {
    return (

        <Fragment>


      <div className='lbox'>

      <div className='CompanyLogo'>
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf9KJbgSWA07gRGe6KdEN3OrLHmvt-zRamxETpoarfitBhUIV7a7qRojBLYrcou4KdTA&usqp=CAU' id='insignia'></img>

      </div>
      </div>

      <div className='rbox1'>

      <form>
        <div className='heading'><h3>Get Started Now</h3></div>
        

        <div className="wrapper">
          <div className="input-data">
          <label></label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
          </div>
          
        </div>

        <div className="wrapper">
          <div className="input-data">
            <div classname="underline"></div>
            <label></label>
          <input type="text" className="form-control" placeholder="Last name" />
          </div>
          
        </div>

        <div className="wrapper">

          <div className="input-data">
          <label></label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
          </div>
          
        </div>

        <div className="wrapper">
          <div className='input-data'>
          <label></label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />

          </div>
          
        </div>

        <div className="d-grid">
          
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <br></br>
        <div className="lines">
          <p>__________or sign up with__________</p>
        </div>

        {/* Social Icons Container */}
        <div className="social-icons-container">
          <div className="google-icon">
            <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="google icon" />
          </div>
          <div className="linkedin-icon">
            <img src="https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg" alt="linked in" />
          </div>
        </div>

        <p className="forgot-password text-right">
          Already have an account ? <a href="/sign-in"> Sign In </a>
        </p>
      </form>


      </div>
      
        </Fragment>

      
    )
  }
}

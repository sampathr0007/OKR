import React, { Component, Fragment} from 'react'


export default class Login extends Component {
  render() {
    return (

      <Fragment>

<div className='lbox'>
<div className='CompanyLogo'>
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf9KJbgSWA07gRGe6KdEN3OrLHmvt-zRamxETpoarfitBhUIV7a7qRojBLYrcou4KdTA&usqp=CAU' id='insignia'></img>

</div>
</div>

        <div className='rbox'>

        <form>
        <div className="heading"><h3>Welcome</h3></div>
        

        <div className="wrapper">
          <div className='input-data'>
          <div classname="underline"></div>
          <label></label>
          <input
            type="Email"
            className="form-control"
            placeholder="Email"
          />
          </div>
          
        </div>

        <div className="wrapper">

          <div className='input-data'>
          <div classname="underline"></div>
          <label></label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />

          </div>
          
        </div>

        {/* <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div> */}

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>

        </div>

         
      </Fragment>
      
    )
  }
}

import React from "react";
import PropTypes from 'prop-types'

// Always remember to import "Link" from react-router-dom before using it.
import { Link } from "react-router-dom";

//accepting props which is defind in app.js ,(Properties) object argument with data and returns a React element

export default function Navbar(props) {
  //Created component and if want to pass variables to cmp then that is props
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
      <Link className="navbar-brand"  to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">

                {/* The Link component is similar to the anchor element (<a>) in HTML.
                 It's "to" attribute specifies which path the link takes you to. 
                 Anytime we link to an internal path, we will use <Link> */}
            <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link " to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
         
         <div className="d-flex">
            <div className="bg-primary rounded mx-2" style={{height:"30px",width:"30px",cursor:"pointer"}} onClick={()=>props.palet('primary')}></div>
            <div className="bg-danger rounded mx-2" style={{height:"30px",width:"30px",cursor:"pointer"}} onClick={()=>props.palet('danger')}></div>
            <div className="bg-success rounded mx-2" style={{height:"30px",width:"30px",cursor:"pointer"}} onClick={()=>props.palet('success')}></div>
            <div className="bg-warning rounded mx-2" style={{height:"30px",width:"30px",cursor:"pointer"}} onClick={()=>props.palet('warning')}></div>
         </div>

<div className={`form-check form-switch text-${props.mode==='light' ? 'dark' :'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">EnableDarkMode</label>
</div>


        </div>
      </div>
    </nav>
  );
}

//deffining or checking props datatypes, if enter "numnber" then throws error
//If want make sure props must not be "undefined" then us "isRequired" and if "undefined" then error in console
Navbar.propTypes={

    title: PropTypes.string.isRequired,
    about: PropTypes.string
}


//default props if don't pass props then it will invoked
Navbar.defaultProps={

    title: "set title here",
    about:"About text here..."
}




import React, { Component } from 'react'
import PropTypes from 'prop-types'
import business from './business.jpg'
import Science from './Science.jpg'
import sports from './sports.jpg'
export class Navbar extends Component {
  

  render() {
    return (
        <>
        
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container ">
    <a className="navbar-brand" href="/" style={{color: "#2a9d8f",fontSize:27}}>NewsDaily</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-inline-block align-text-top" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between d-inline-block align-text-top">
        <li className="nav-item">
          <a className="nav-link active mx-2" aria-current="page" href="/">Home</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active mx-2" href="/business">
          <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA13DuSa.img?w=80&h=80&q=60&m=6&f=jpg&u=t" alt="" style={{ width: '30px', height: 'auto',borderRadius: '50%' , marginRight: '8px' }}/>
            Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active mx-2"  href="/sports">
          <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAwT9qD.img?w=80&h=80&q=60&m=6&f=jpg&u=t" alt="" style={{ width: '30px', height: 'auto',borderRadius: '50%', marginRight: '8px'  }}/>
          Sports</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active mx-2" href="/science">
          <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA19I1ex.img?w=80&h=80&q=60&m=6&f=jpg&u=t" alt="" style={{ width: '30px', height: 'auto',borderRadius: '50%', marginRight: '8px'  }}/>
          Science</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
      </div></>
    )
  }
}

export default Navbar

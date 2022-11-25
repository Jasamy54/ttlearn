import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
<div className="row mt-4">
  <div className="col-sm-6 col-md-4 col-lg-3 ">
    <div className="card">
      <div className="card-body">
      <Link to='/cphrases' >
    <img src={'../image/sanriofriends.jpg'} alt="..." className='link-img img-fluid'/>
    </Link>
        <h5 className="card-title">Common Phrases</h5>
      </div>
    </div>
  </div>

  <div className="col-sm-6 col-md-4 col-lg-3">
    <div className="card">
      <div className="card-body">
      <Link to='/family' >
    <img src={'../image/sanriofriends.jpg'} alt="..." className='link-img img-fluid'/>
    </Link>
        <h5 className="card-title">Family</h5>
      </div>
    </div>
  </div>

  <div className="col-sm-6 col-md-4 col-lg-3">
    <div className="card">
      <div className="card-body">
      <Link to='/food' >
    <img src={'../image/sanriofriends.jpg'} alt="..." className='link-img img-fluid'/>
    </Link>
        <h5 className="card-title">Food and Drinks</h5>
      </div>
    </div>
  </div>

  <div className="col-sm-6 col-md-4 col-lg-3">
    <div className="card">
      <div className="card-body">
      <Link to='/verbs' >
    <img src={'../image/sanriofriends.jpg'} alt="..." className='link-img img-fluid'/>
    </Link>
        <h5 className="card-title">Verbs</h5>
      </div>
    </div>
  </div>

  <div className="col-sm-6 col-md-4 col-lg-3">
    <div className="card">
      <div className="card-body">
      <Link to='/ditems' >
    <img src={'../image/sanriofriends.jpg'} alt="..." className='link-img img-fluid'/>
    </Link>
        <h5 className="card-title">Daily Items</h5>
      </div>
    </div>
  </div>

  <div className="col-sm-6 col-md-4 col-lg-3">
    <div className="card">
      <div className="card-body">
      <Link to='/color' >
    <img src={'../image/sanriofriends.jpg'} alt="..." className='link-img img-fluid'/>
    </Link>
        <h5 className="card-title">Colors</h5>
      </div>
    </div>
  </div>

  </div>

    
    
</div>
  )
}

export default Home
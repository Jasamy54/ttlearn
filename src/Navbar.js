import React from 'react'

function Navbar() {
  return (
    <div>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TTLearn</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <a className="nav-link" href="/cphrases">Common Phrases</a>
      <a className="nav-link" aria-current="page" href="/family">Family</a>
        <a className="nav-link" href="/food">Food and Drink</a>
        <a className="nav-link" href="/verbs">Verbs</a>
        <a className="nav-link" href="/ditems">Daily Items</a>
        <a className="nav-link" href="/color">Colors</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
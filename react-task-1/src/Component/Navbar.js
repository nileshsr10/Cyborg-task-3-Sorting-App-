import React from 'react'
import ArrayChart from './ArrayChart'

export default function Navbar({asMethod,nwArray}) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <select className="btn bg-light text-dark nav-item dropdown" id='DropDown'>
                            <option value="Bubble">Bubble Sort</option>
                            <option value="Insertion">Insertion Sort</option>
                            {/* <option value="Selection">Selection Sort</option> */}
                        </select>
                <button type="button" className="btn btn-lg btn-dark mx-2" onClick={()=>{asMethod()}}>Dark</button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

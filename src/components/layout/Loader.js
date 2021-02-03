  import React, {Fragment} from 'react'
  import {app} from '../.././App'

  const Loader = () => {

  return (
  <Fragment>
    <div id="circle">
      <svg 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        xlinkHref="http://www.w3.org/1999/xlink" 
        x="0px" y="0px" width="300px" height="300px" 
        viewBox="0 0 300 300" 
        enable-background="new 0 0 300 300" 
        space="preserve">
        <defs>
            <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "></path>
        </defs>
        <circle cx="150" cy="100" r="75" fill="none"></circle>
        <g>
            <use xlinkHref="#circlePath" fill="none"/>
            <text fill="#d9d7d7">
                <textPath href="#circlePath" className="branding"> {app}
                </textPath>
            </text>
        </g>
      </svg>
    </div>
  </Fragment>
  )
  }

  export default Loader

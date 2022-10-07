import React from 'react'
import Alert from 'react-bootstrap/Alert';
function Maintainenace() {
  return (
    <div>
        <Alert variant="danger" style={{position:"fixed",width:"100vw",zIndex:"9999"}}>
        Website is currently in maintenance
        </Alert>
    </div>
  )
}

export default Maintainenace
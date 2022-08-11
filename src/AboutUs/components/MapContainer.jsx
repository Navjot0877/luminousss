import React from 'react'
import "./mapcontainer.css"
export default function MapContainer() {
  return (
    <div className='mapContainer_about' >
        {/* <h5 >Want to Visit?</h5>
        <h2>Find us Here!!!</h2> */}
        
        <div class="mapouter">
        
                <iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Luminous%20Liquor&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                    </iframe>
             </div>       
    </div>
  )
}

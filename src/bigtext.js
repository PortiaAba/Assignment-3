import React from 'react'
import './css/components.css'
function Bigtext() {
    return (
        <div>
            <h1 className='title'>Mavel's Fearless</h1>
            <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae molestias earum eveniet.</p>
            <br />
            <div className='search-bar'>
            <input type='search' placeholder='marvel' />                  
            </div>

        </div>
    )
}

export default Bigtext;
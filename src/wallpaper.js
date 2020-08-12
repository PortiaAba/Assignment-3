import React from 'react'
import './css/sample-wallpaper.css'

function Wallpaper(props) {
    return (

            <article class="wallpaper">
            <img src={props.pic} alt="wallpaper #1" class="wallpaper" />
            </article>

    )
}

export default Wallpaper
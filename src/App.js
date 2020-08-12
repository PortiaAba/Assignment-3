import React from 'react';
import logo from './logo.svg';
import './css/global.css'; 
import './css/layout.css'
import './css/sample-wallpaper.css'
import './css/components.css'
import Navbar from './navbar'
import Bigtext from './bigtext'
import WallPaper from './wallpaper'
import hulk from './img/hulk-1.jpg'
import venom from './img/venom-1.jpg'
import venom2 from './img/venom-2.jpg'

function App() {
    return (
        <div>
            <Navbar />
            <br/>
            <br/>
            <header className='header'>
                <div className='container'>
                <Bigtext />

                <div className='sample-wallpaper'>
                <WallPaper pic={venom} />
                <WallPaper pic={hulk} />
                <WallPaper pic={venom2} />

                </div>

                
                </div>
            </header>
        </div>
    );
}

export default App;
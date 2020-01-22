import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1>My name is <strong>Yonael Bekele </strong></h1>
                    <h4>
                    <br/>
                     Welcome & Feel Free to Connect!<br/>

                    </h4>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header

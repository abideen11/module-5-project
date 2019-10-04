import React from 'react'
import {Link} from 'react-router-dom'
import Mission from './Mission'
import Showcase from './Showcase'
import Contact from './Contact'

export default class Home extends React.Component {
    render() {
        return(
            <div className="div-home">
                <Mission />
                <Showcase entrepreneur={this.props.entrepreneurs}/>
                <Contact />
            </div>
        )
    }
}
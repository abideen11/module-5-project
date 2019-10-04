import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import Entrepreneurs from './Entrepreneurs'
import Filter from './Filter'

export default class EntrepreneursContainer extends React.Component {
    render() {
        return(
            // this.props.entrepreneur[0] ?
            <div className="div-entrp">
                <div className="content-entrp-header">
                    <h1>Our Esteemed Entrepreneurs</h1>
                    <Filter filterEntrep={this.props.filterEntrep}/>
                </div>
                <div className="content-entrp">
                </div>
                {this.props.entrepreneurs.map(entrepreneur => <Entrepreneurs entrepreneur={entrepreneur} setActiveEntrepreneur={this.props.setActiveEntrepreneur}/>)}
                {/* {this.props.entrepreneurs.map(all => all.amount == 0 ? null : <Entrepreneurs all={all}/>)} */}
            </div>
        )
    }
}
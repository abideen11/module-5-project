import React from 'react'

export default class Filter extends React.Component {
    render() {
        // debugger
        // console.log(this.props)
        console.log(this.props.value)
        console.log(this.props)
        return(
            <div className="div-filter">
                <h3 className="text-reg">Region</h3>
                <select value={this.props.value} onChange={(e) => this.props.filterEntrep(e.target.value)}>
                    
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="North America">North America</option>

                </select>
            </div>
        )
    }
}
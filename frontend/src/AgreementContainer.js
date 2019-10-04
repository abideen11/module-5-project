import React from 'react'
import Showcase from './Showcase'


export default class AgreementContainer extends React.Component {
    render() {
        return(
            <div>
                <Showcase entrepreneur={this.props.entrepreneurs}/>
            </div>

            // <div>
            //     {
                    
            //         this.props.entrepreneurs.map(entrepreneur => {
            //         return <Showcase entrepreneur={entrepreneur} key={entrepreneur.id}/>})
            //         //enttrepreneurs[2]
            //     }
            // </div>
        )
    }
}
import React from 'react'
import { IoLogoFacebook, IoLogoTwitter, IoLogoGoogle, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io'
import {Link} from 'react-router-dom'

// style={{color: 'white', width: 5}}
export default function Footer() {
    return(
        <div className="foot-div">
            <div className="ft">
                <p>
                    Yoon is a non-profit organization that provides microloans to aspiring entrepreneurs
                    in developing nations. The loans are funded by lenders, grants and donations, also the loans
                    charge zero interest.
                </p>
                <hr />
                <h2>
                    <Link><IoLogoFacebook /></Link>
                    <Link><IoLogoTwitter /></Link>
                    <Link><IoLogoGoogle /></Link>
                    <Link><IoLogoInstagram /></Link>
                    <Link><IoLogoLinkedin /></Link>
                </h2>
            </div>
        </div>
    )
}
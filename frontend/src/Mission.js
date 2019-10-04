import React from 'react'
// import people from './public/people.png'
import { FaHeart } from "react-icons/fa";

export default function Mission () {
    return(
        <div className="mission-content">
            {/* <img src={people} alt="people smiling"/> */}
            <div></div>
            <div className="mission-container">
                <font color="red"><FaHeart /></font>
                <h1>Our Mission</h1>
                <p>Everyday we ask ourselves, "How do we make take people out of poverty?". Lots of ideas comes into our mind. Not to be dismissive of other ideas but us at Yoon, beleive empowerment
                    is arguably the best solution. Being fortunate to live in a developed and industrialized country, we have so many access to opportunities we take for granted. Knowing this, we decided 
                    to establish a non-profit that gives a helping hand to our less fortunate neighbors. We know if we give seed capital to a capable and determined entrepreneur, the impact of this 
                    entrepreneur business will have a far reaching impact than any other aid.  
                </p>
            </div>
        </div>
      
    )
}
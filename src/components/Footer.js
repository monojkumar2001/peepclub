import React from 'react';
import { Link } from "react-router-dom";

function Footer() {

    return ( 

        <>
          <div className="footer">
            <div className="footer-wrapper">

            <div className="footer-item-1 footer-item">
                    <p>© 2023 The Peep Club all rights reserved.</p>
                </div>
                <div className="footer-item-2 footer-item">
                <Link to='/terms'>
                Terms of Use
                </Link>
                <a href="/">Privacy Policy</a>
                </div>
                </div>                  
          </div>
        </>

    )

}

export default Footer;



 
import React, {Fragment} from 'react';
import { Helmet } from "react-helmet"


const Header = () => {
    return(
        <Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap-grid.min.css" />
            </Helmet>
            <nav style={{width:'100vw',backgroundColor:'purple'}}>
                <div className="container">
                    <h1 style={{color:'white',margin:'0'}}>Menu</h1>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header
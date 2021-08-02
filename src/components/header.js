import React, {Fragment} from 'react';
import { Link } from "gatsby"
import { Helmet } from "react-helmet"


const Header = () => {
    return(
        <Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap-grid.min.css" />
            </Helmet>
            <nav style={{backgroundColor:'purple'}}>
                <div className="container">
                    <Link to="/">
                        <h1 style={{color:'white',margin:'0'}}>
                            Menu
                        </h1>
                    </Link>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header
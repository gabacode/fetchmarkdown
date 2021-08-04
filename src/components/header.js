import React, {Fragment} from 'react';
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import styled from "styled-components"


const Header = () => {
    return(
        <Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap-grid.min.css" />
            </Helmet>
            <Masthead>
                <Head>
                    <Link to="/">
                        <SiteTitle>
                            #fetchmarkdown
                        </SiteTitle>
                    </Link>
                </Head>
            </Masthead>
        </Fragment>
    )
}

const SiteTitle = styled.h1`
    text-shadow: grey 2px 2px;
    color: black;
    top: 25%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    &:hover {
        text-decoration: underline;
      }
`
const Masthead = styled.div`
    background: url(https://www.publicdomainpictures.net/pictures/200000/velka/turquoise-curve-background.jpg) no-repeat scroll top;
    background-size: 1600px auto;
    margin: 0 auto;
    position: relative;
    max-width: 1403px;
    width: 100%;
    min-height: 230px;
    height: 100%;
`
const Head = styled.div`
    text-align: center;
    color: #141412;
    display: block;
    margin: 0 auto;
    max-width: 1080px;
    min-height: 10px;
    padding: 0 20px;
    text-decoration: none;
`

export default Header
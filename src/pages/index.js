import React, {Fragment} from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout'
import { Helmet } from "react-helmet"


export default function IndexPage({data}) {
  const postList = data.allMdx.edges
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Layout>
    <main>
      <ul>
      {
        postList.map((post, index) => (
          <Fragment>
            <li key={index}>
                <h1 style={{display:'inline'}}>
                  <Link to={`posts/${post.node.slug}`}>
                    {post.node.frontmatter.title}
                  </Link>
                </h1>
                <span> (by <Link to={`author/${post.node.frontmatter.author}`}>{post.node.frontmatter.author}</Link>)</span><br/>
            </li>
          </Fragment>
        ))
      }
      </ul>
    </main>
    </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allMdx(filter: {fields: {type: {eq: "posts"}}}) {
      edges {
          node {
              body
              slug
              frontmatter {
                title
                author
                hasBool
              }
          }
      }
    }
  }
`
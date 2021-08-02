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
                <h1 style={{display:'inline'}}>{post.node.frontmatter.title}</h1>
                <span> (by {post.node.frontmatter.author})</span><br/>
                <Link to={`posts/${post.node.slug}`}>{post.node.slug}</Link>
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
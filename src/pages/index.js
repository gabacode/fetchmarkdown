import React, {Fragment} from "react"
import { graphql, Link } from "gatsby"

export default function IndexPage({data}) {
  const postList = data.allMdx.edges
  return (
    <main>
      <title>
        Home Page
      </title>
      <ul>
      {
        postList.map((post, index) => (
          <Fragment>
            <li key={index}>
                <h1 style={{display:'inline'}}>{post.node.frontmatter.title}</h1>
                <span> (by {post.node.frontmatter.author})</span><br/>
                <Link to={`posts${post.node.fields.slug}`}>{post.node.fields.slug}</Link>
            </li>
          </Fragment>
        ))
      }
      </ul>
    </main>
  )
}

export const query = graphql`
  query {
    allMdx {
      edges {
          node {
              body
              fields {
                  slug
              }
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
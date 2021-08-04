import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Tag({ data }) {
const posts = data.allMdx.edges
  return (
    <>
    <Layout>
        {
            posts.map((post, i) => (
                <div key={i}>
                    {JSON.stringify(post.node.slug)}
                </div>
            ))
        }
    </Layout>
    </>
  )
}
export const query = graphql`
  query($tags: String!) {
    allMdx(filter: {frontmatter: {tags: {eq: $tags}}}) {
      edges {
          node {
              body
              slug
              frontmatter {
                title
                date
                author
                category
                tags
              }
          }
      }
    }
  }
`
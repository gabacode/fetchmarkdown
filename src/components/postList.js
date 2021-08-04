import React, {Fragment} from 'react';
import {FaUser, FaCalendarAlt, FaFolderOpen, FaHashtag} from 'react-icons/fa';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const PostList = () => {
    const data = useStaticQuery(graphql`
    query {
        allMdx(filter: {fields: {type: {eq: "posts"}}}) {
            edges {
                node {
                    body
                    slug
                    frontmatter {
                      title
                      date
                      author
                      category
                      tag
                    }
                }
            }
          }     
        }
  `);
    const postList = data.allMdx.edges
    
    return(
        <>
        {
          postList.map((post, index) => (
            <Fragment>
              <PostWrapper key={index}>
                  <PostTitle>
                    <TitleLink to={`posts/${post.node.slug}`}>
                      {post.node.frontmatter.title}
                    </TitleLink>
                  </PostTitle>
                  <BreadCrumbs>
                      
                      <Crumb>
                        <FaCalendarAlt className="icon" size="12"/>
                        <Link to={`date/${post.node.frontmatter.date.replace(/ /g,"_")}`}>
                          {post.node.frontmatter.date}
                        </Link>
                      </Crumb>

                      <Crumb>
                        <FaUser className="icon" size="12"/>
                        <Link to={`author/${post.node.frontmatter.author}`}>
                          {post.node.frontmatter.author}
                        </Link>
                      </Crumb>

                      <Crumb>
                      <FaFolderOpen className="icon" size="12"/>
                        {post.node.frontmatter.category && post.node.frontmatter.category.map((category, i) => (
                          <>
                            <Link to={`category/${category.replace(/ /g,"_")}`}>
                              {category}
                            </Link>
                            {i == 0 ?
                              <span>, </span>
                              :null
                            }
                          </>
                        ))}
                      </Crumb>

                      <Crumb>
                        <FaHashtag className="icon" size="12"/>
                        <Link to={`tag/${post.node.frontmatter.tag.replace(/ /g,"_")}`}>
                          {post.node.frontmatter.tag}
                        </Link>
                      </Crumb>

                  </BreadCrumbs>
                  <MDXRenderer>
                    {post.node.body}
                  </MDXRenderer>
              </PostWrapper>
            </Fragment>
          ))
        }
        </>
      )
}

const PostWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  max-width: 600px;
  margin: 0 auto;
`

const PostTitle = styled.h1`
  color:black;
  text-align:center;
`
const Crumb = styled.div`
  margin-right: 15px;
  display: inline;
`

const BreadCrumbs = styled.p`
  text-align:center;
  color: #2455C3;
  text-decoration: none;
`
const TitleLink = styled(props => <Link {...props} />)`
  color: #333;
`

export default PostList;
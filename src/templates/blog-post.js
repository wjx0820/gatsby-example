import React from "react"
import { Link, graphql } from "gatsby"
import LayoutBlog from "../components/layout-blog"
import SEO from "../components/seo"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <LayoutBlog>
      <SEO title={post.frontmatter.title} />
      <h1>{post.frontmatter.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link to="/">Go back to the homepage</Link>
    </LayoutBlog>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`

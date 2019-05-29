import React from "react"
import { Link } from "gatsby"

import LayoutBlog from "../../components/layout-blog"
import SEO from "../../components/seo"

const BlogPostOne = () => (
  <LayoutBlog>
    <SEO title="Blog Post One" />
    <h1>Blog Post One</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quibusdam
      nemo, ratione exercitationem expedita voluptatum quidem nihil illum nisi
      incidunt ducimus quia suscipit delectus dolor esse placeat porro
      praesentium optio.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </LayoutBlog>
)

export default BlogPostOne

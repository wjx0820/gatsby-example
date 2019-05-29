import React from "react"
import { Link } from "gatsby"

import LayoutBlog from "../components/layout-blog"
import SEO from "../components/seo"

const ThirdPage = () => (
  <LayoutBlog>
    <SEO title="Page three" />
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </LayoutBlog>
)

export default ThirdPage

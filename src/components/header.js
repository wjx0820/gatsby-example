import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import IdentityModal from "react-netlify-identity-widget"

const Header = ({ siteTitle }) => {
  const [showDialog, setShowDialog] = useState(false)

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `space-between`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <div>
          <Link to="/page-2" style={{ color: "white" }}>
            Page 2
          </Link>
          <Link to="/page-3" style={{ color: "white", marginLeft: 12 }}>
            Page 3
          </Link>
        </div>
        <button onClick={() => setShowDialog(true)}>Log In</button>
        <IdentityModal
          showDialog={showDialog}
          onCloseDialog={() => setShowDialog(false)}
        />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

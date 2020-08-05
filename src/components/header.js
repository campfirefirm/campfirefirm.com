import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `transparent`,
      marginBottom: 0,
      position: `fixed`,
      top: 0,
      height: '50px',
      width: '100%',
      zIndex: 9999,
      color: '#fff',
      opacity: 0.8,
    }}
  >
    <div
      className="nav"
      style={{
        margin: `0 auto`,
        textAlign: 'center',
        maxWidth: 960,
        padding: `1rem`,
      }}
    >
      <a href="#video">Video</a> | <a href="#design">Design</a> | <a href="#web">Web</a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Campfire Firm`,
}

export default Header

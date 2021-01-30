import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <section>
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
        <span>edit via <a href="/admin/#/"><strong>/admin/#/</strong></a></span>
        <span style={{marginLeft: "4em"}}><a href="https://app.netlify.com/sites/hardcore-jennings-13cefd">netlify dashboard</a></span>
        <span style={{marginLeft: "4em"}}>edits committed to <a href="https://github.com/100ideas/gatsby-1-netlify">github</a></span>

      </section>
    )
  } else {
    header = (
      <section>
        <Link className="header-link-home" to="/"> {title} </Link>
        <span style={{float: "right"}}>edit via <a href="/admin/#/"><strong>/admin/#/</strong></a></span>
      </section>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout

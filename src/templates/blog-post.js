import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const frontmatter = post.frontmatter
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const datasrc = JSON.stringify(data, null, 2)
  const headerImageURL = frontmatter.headerImage && frontmatter.headerImage.name === 'header' 
    ? frontmatter.headerImage.publicURL
    : false

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          {headerImageURL && <img src={headerImageURL} alt="header" />}
          
        </header>

        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>

      <hr/>
      <h3>pageg src via graphql</h3>
      <code><pre>
          {datasrc}
          </pre>
        </code>

    </Layout>
  )
}

export default BlogPostTemplate


export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        headerImage: image {
          publicURL
          name
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`



/* 
kata's id:
"9702e3ca-ce1a-59c6-b136-ff6a7c0a9ad9" 

need to work out how to get gatsby to add fields for logo and headerimg... just retuning for image field right now

    markdownRemark(id: { eq: "9702e3ca-ce1a-59c6-b136-ff6a7c0a9ad9" }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          headerImage: { publicURL }
          logo: { publicURL } 
        }
      }
    }

*/

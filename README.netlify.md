# notes on setting up netlify 

https://www.netlifycms.org/docs/gatsby/

npm install --save netlify-cms-app gatsby-plugin-netlify-cms


# plan
- start w/ barebones gatsby start
- also refer to more compex gatsby-netlify-starter-cms
  - https://github.com/netlify-templates/gatsby-starter-netlify-cms

## mdx
gatsby howto: Add components to content using MDX
https://gatsbyjs.com/docs/how-to/routing/mdx/

gatsby theme for MDX content org by collections (Sources the content from basePath and creates multiple collections based on your config)
https://www.gatsbyjs.com/plugins/gatsby-theme-content-collections/?=mdx

doc site, simplish?
https://github.com/hasura/gatsby-gitbook-starter

doc site, simplish
https://github.com/karolis-sh/gatsby-mdx/tree/master/packages/netlify-cms-widget-mdx

https://github.com/renvrant/gatsby-mdx-netlify-cms-starter

experimental support for add mdx components like graph to page
https://github.com/karolis-sh/gatsby-mdx/tree/master/packages/netlify-cms-widget-mdx


## troubleshooting: remove localstorate `nelifySiteUrl` key
'localStorage.removeItem("netlifySiteURL");'
- https://github.com/netlify-templates/gatsby-starter-netlify-cms/issues/58

### resolution
- delete all complex app state entries from local storage
- delete identity instance on netlify
- ~~add 'repo' key to config.yaml w/ github repo~~
  - this couldn't have affected the deployed site b/c I forgot to push the change
- delete all gatsby prod file
- go to https://hardcore-jennings-13cefd.netlify.app/
  - sign up for email first



## netlify-cms projects & resources
forum
- https://community.netlify.com/search?q=netlify-cms

- https://github.com/netlify-templates/gatsby-starter-netlify-cms

netlify-cms github API core
https://github.com/netlify/netlify-cms/tree/master/packages/netlify-cms-backend-github/src

- https://www.netlifycms.org/docs/beta-features/
  - config 'local_backend' in config.yaml when localmode
    - https://www.netlifycms.org/docs/beta-features/
  - enable 'squash_merges' for web cms commits
    - https://www.netlifycms.org/docs/beta-features/#squash-merge-github-pull-requests
  - netlify widgets 
    - https://www.npmjs.com/search?q=netlify%2Dcms%2Dwidget%2D
    - https://github.com/karolis-sh/gatsby-mdx/tree/master/packages/netlify-cms-widget-mdx


## gatsby 
starter blogs https://www.gatsbyjs.com/starters/?
- https://www.gatsbyjs.com/starters/kalwalt/gatsby-starter-i18n-bulma  netlify-cms, bulma 
- https://www.gatsbyjs.com/starters/filipowm/boogi netlify-cms, mdx, book
- https://www.gatsbyjs.com/starters/hasura/gatsby-gitbook-starter mdx book
- https://www.gatsbyjs.com/starters/thriveweb/yellowcake netlify-cms


- https://www.gatsbyjs.com/plugins/gatsby-theme-content-collections/?=mdx
  - mdx collections w/ categories, simplish - understand how to make gatsby/graphql create collections
- https://github.com/rocketseat/gatsby-themes  book mdx react-live
  -  https://rocketdocs.netlify.app/
  - https://github.com/FormidableLabs/react-live

  gatsby layout https://www.gatsbyjs.com/docs/tutorial/part-three/#creating-layout-components

how createNodes api works and can be extended to add structured data to nodes
https://www.gatsbyjs.com/docs/tutorial/part-seven/

very interesting relatively simple app w/ mdx and netlify
https://github.com/hasura/gatsby-gitbook-starter
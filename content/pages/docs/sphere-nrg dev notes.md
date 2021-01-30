# notes on setting up netlify 

https://www.netlifycms.org/docs/gatsby/

npm install --save netlify-cms-app gatsby-plugin-netlify-cms

```
to develop locally, uncomment the following line in 'config.yml':

#local_backend: true

then `npm run local'
```


# investigate then prototype
netlify-cms
[x] netlify-cms + gatsby - notes below

auth 
[ ] https://docs.magic.link/webauthn
[ ] https://github.com/vercel/next.js/tree/canary/examples/with-next-auth

prosemirror (its cool if it gets '[x]')
[ ] show: https://discuss.prosemirror.net/c/show/6
[ ] media manager https://emergence-engineering.com/blog/prosemirror-image-plugin
  - https://discuss.prosemirror.net/t/image-plugin-with-uploading-image-title-and-a-few-other-things/3408
[ ] pubpub https://github.com/pubpub/pubpub/pull/1239/files
  - https://github.com/pubpub/pubpub
  - https://discuss.prosemirror.net/t/image-plugin-with-uploading-image-title-and-a-few-other-things/3408/3
[ ] A modified version of Atlassian’s React+TypeScript PM editor
  - https://discuss.prosemirror.net/t/a-modified-version-of-atlassians-react-typescript-pm-editor/3441/3
  - atlaskit's editor plugins are awesome UX
[ ] complex roamish ui https://discuss.prosemirror.net/t/im-building-a-heavily-customized-editor-like-roam-research/3006
  - pass 'password' https://fiber-note-demo.herokuapp.com/notes/welcome
[ ] balsa https://discuss.prosemirror.net/t/balsa-open-source-documents-tasks-and-knowledgebase-platform/2201  
  - https://github.com/gorkem-cetin/balsa
[ ] https://github.com/TeemuKoivisto/prosemirror-react-typescript-example

CMS 
[ ] https://userbase.com
  - very cool service-worker system
  - perhaps could adapt to work as hypercore proxy? 
[ ] https://tina.io/docs/ui/inline-editing/inline-blocks/

SSR - make it tiny and fast - simpler than gatsby!
[ ] https://github.com/vitejs/vite
[ ] https://preactjs.com/guide/v10/hooks/
[ ] https://nextjs.org/learn/basics/data-fetching
[ ] https://github.com/react-static/react-static
[ ] https://github.com/react-static/react-static/tree/master/packages/react-static-plugin-mdx

UI 
[ ] https://tiny-swiper.joe223.com/
[ ] ... that UI component pack w/ path-connectors-diagrams...?

misc ideas 
- hackerspaces federated api 
  - https://spaceapi.io 
  - also w/ automated update crawler? https://github.com/SpaceApi/directory-api/blob/master/collector/main.go
- orgs have some way of adding updates or sub-elements to their sphere page, or better configuring sphere to subscribe to sources and create these automatically
  - this forms a pulse of dated events 
- get discourse forum integrated w/ google group and sphere 

---

# gatsby notes
[x] start w/ barebones gatsby start
[x] also refer to more compex gatsby-netlify-starter-cms
  - https://github.com/netlify-templates/gatsby-starter-netlify-cms

## mdx
gatsby howto: Add components to content using MDX
- https://gatsbyjs.com/docs/how-to/routing/mdx/

gatsby theme for MDX content org by collections (Sources the content from basePath and creates multiple collections based on your config)
- https://www.gatsbyjs.com/plugins/gatsby-theme-content-collections/?=mdx

doc site, simplish?
- https://github.com/hasura/gatsby-gitbook-starter

doc site, simplish
- https://github.com/karolis-sh/gatsby-mdx/tree/master/packages/netlify-cms-widget-mdx

- https://github.com/renvrant/gatsby-mdx-netlify-cms-starter

experimental support for add mdx components like graph to page
- https://github.com/karolis-sh/gatsby-mdx/tree/master/packages/netlify-cms-widget-mdx





## gatsby 

in general feels really complex and overpowered... reactive graphql is nice but I'm going tolook for other simpler possibilitys

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



---

## netlify-cms troubleshooting: remove localstorate `nelifySiteUrl` key
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

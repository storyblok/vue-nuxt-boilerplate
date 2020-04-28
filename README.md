# Nuxt.js Storyblok Boilerplate

## How to get started?

1. [Register](https://app.storyblok.com/#!/signup) at Storyblok for free
2. Create a new empty Space and exchange the preview token with your own in ```nuxt.config.js``` (not required if you have downloaded the project via app.storyblok.com)

```js
  // in nuxt.config.js
  modules: [
    ['storyblok-nuxt', 
      { 
        accessToken: '<Your_Access_Token_Here>', cacheProvider: 'memory'
      }
    ]
  ],
```

3. Read the Nuxt.js tutorial about Storyblok's concept: https://www.storyblok.com/tp/nuxt-js-multilanguage-website-tutorial
4. Enjoy and start developing

## Build Setup

``` bash
# install dependencies
$ npm install # or yarn install

# serve with hot reload at localhost:3000
$ npm run dev # or yarn dev

# build for production and launch server
$ npm run build # or yarn build
$ npm start # or yarn start

# generate static project
$ npm run generate # or yarn generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

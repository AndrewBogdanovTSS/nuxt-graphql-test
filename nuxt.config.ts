// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-graphql-client'],
  'graphql-client': {
    clients: {
      spacex: 'https://spacex-production.up.railway.app/',
      todos: 'https://nuxt-gql-server-2gl6xp7kua-ue.a.run.app/query',
      contentful: {
        host: 'https://graphql.contentful.com/content/v1/spaces/opyv2i9hsdft',
        token: 'XrxpmUr3FoZK71yfuWzpm-ImK0_hUbSyBh6IEK0bXmk',
      },
    },
  },
});

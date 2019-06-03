export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cf54b107f71704659bacbc3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-cp-studio',
                  apiId: 'd93ae0d2-ee5c-49ab-b9bc-b420be9048a4'
                },
                {
                  buildHookId: '5cf54b107238ce6bf868a293',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-cp',
                  apiId: '02474f30-1d5c-4f92-bd15-47366fe340f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dev1010/sanity-gatsby-cp',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-cp.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

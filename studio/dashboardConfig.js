export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '60541b3da4cc617092f92589',
                  title: 'Sanity Studio',
                  name: 'portfolio-studio-jeg28dpv',
                  apiId: '1f23d777-299c-4c93-a634-ce1329c41902'
                },
                {
                  buildHookId: '60541b3de1f9f56c9d15584b',
                  title: 'Portfolio Website',
                  name: 'portfolio-web-ddebukb4',
                  apiId: '1f6a8203-07d5-4c40-bece-17c2a447e37c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rossobrien/portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://portfolio-web-ddebukb4.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '60ffd4f394b1dfbb9cbe3884',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-zhj7szme',
                  apiId: '4402377c-929c-4b2e-a415-5d07737d7125'
                },
                {
                  buildHookId: '60ffd4f3580df9b7523ff454',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-5ss7b1p2',
                  apiId: 'ae36f973-8e6e-45c9-8fe4-c43d28f1390a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Ted2xmen/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-5ss7b1p2.netlify.app', category: 'apps'}
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

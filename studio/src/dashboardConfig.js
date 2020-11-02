export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fa091cc353435012b6e7803',
                  title: 'Sanity Studio',
                  name: 'blog-b-studio',
                  apiId: 'd7c6a2e4-4cce-4213-9f98-4b83f5c40df9'
                },
                {
                  buildHookId: '5fa091cc1e053a1b7c737420',
                  title: 'Blog Website',
                  name: 'blog-b',
                  apiId: '0f2260d2-647f-40b4-bde4-0d38b5a52f71'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aarmelim/blog-b',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://blog-b.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

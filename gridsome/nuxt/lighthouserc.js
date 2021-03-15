module.exports = {
  ci: {
    collect: {
      // Just use local host lhci figures out the port for the ci build
      url: [
        'https://www.unilever.com/',
        'https://www.unilever.co.uk/',
        'https://www.unilever.it/',
      ],
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.8 }],
        'categories:best-practices': ['error', { minScore: 0.92 }],
        'categories:seo': ['error', { minScore: 0.9 }],
      },
    },
  },
}

module.exports = {
  ci: {
    collect: {
      // Just use local host lhci figures out the port for the ci build
      url: [
        'https://www.unilever.com/',
        'https://www.unilever.co.uk/',
        'https://www.unilever.it/',
        'https://www.hul.co.in/',
        'https://www.unilever.pk/',
        'https://www.unilever.com.lk/',
        'https://www.unileverusa.com/',
        'https://www.unilever.ca/',
        'https://www.unilever.com.tr/',
        'https://www.unilever.ru/',
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

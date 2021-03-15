module.exports = {
  ci: {
    collect: {
      // Just use local host lhci figures out the port for the ci build
      url: [
        'htpps://www.unilever.com/',

        'htpps://www.hul.co.in/',

        'htpps://www.unilever.pk/',

        'htpps://www.unilever.com.lk/',

        'htpps://www.unileverusa.com/',

        'htpps://www.unilever.ca/',

        'htpps://www.unilever.com.tr/',

        'htpps://www.unilevermaghreb.com/',

        'htpps://www.unileverme.com/',

        'htpps://www.unilever.ru/',

        'htpps://www.unilever.co.jp/',

        'htpps://www.unilever.com.cn/',

        'htpps://www.unilever.co.kr/',

        'htpps://www.unilever.com.tw/',

        'htpps://www.unilever.com.bd/',

        'htpps://www.unilever.com.br/',

        'htpps://www.unilever.com.mx/',

        'htpps://www.unilever-middleamericas.com/',

        'htpps://www.unilever.com.ar/',

        'htpps://www.unilever.co.id/',

        'htpps://www.unilever.com.my/',

        'htpps://www.unilever.com.sg/',

        'htpps://www.unilever.com.vn/',
        'htpps://www.unilever.co.il/',

        'htpps://www.unilever.co.uk/',

        'htpps://www.unilever.co.il/',

        'htpps://www.unilever.dk/',

        'htpps://www.unilever.fi/',

        'htpps://www.unilever.se/',

        'htpps://www.unilever.com.ph/',

        'htpps://www.unilever.co.th/',

        'htpps://www.unilever.com.au/',

        'htpps://www.unilever.fr/',

        'htpps://www.unilever.be/',

        'htpps://www.unilever.nl/',

        'htpps://www.unilever.hu/',

        'htpps://www.unilever.de/',

        'htpps://www.unilever.es/',

        'htpps://www.unilever.it/',

        'htpps://www.unilever.cz/',

        'htpps://www.unilever.sk/',

        'htpps://www.unilever.gr/',

        'htpps://www.unilever.pl/',

        'htpps://www.unilever-fima.com/',

        'htpps://www.unilever.ro/',

        'htpps://www.unilever-ewa.com/',

        'htpps://www.unilever.co.za/',

        'htpps://www.unilever.com.hk',

        'htpps://www.unilever.tt',

        'htpps://www.unilever.ua/',

        'htpps://www.unilever.ee/',
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

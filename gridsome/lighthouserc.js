module.exports = {
    ci: {
        collect: {
            // Just use local host lhci figures out the port for the ci build
            url: [
              "http://localhost/",
              
            ],
            staticDistDir: "./gridsome/src/",
          },
         upload: {
            target: 'temporary-public-storage',
      },
    },
  };
  

  
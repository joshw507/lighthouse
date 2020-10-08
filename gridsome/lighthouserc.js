module.exports = {
    ci: {
        collect: {
            // Just use local host lhci figures out the port for the ci build
            url: [
              "http://localhost:8080/",
              
            ],
            staticDistDir: "./site/dist/",
          },
         upload: {
            target: 'temporary-public-storage',
      },
    },
  };
  

  
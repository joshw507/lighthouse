module.exports = {
    ci: {
        collect: {
            // Just use local host lhci figures out the port for the ci build
            url: [
              "http://localhost/",
              
            ],
            startServerCommand: 'npm run start',
          },
         upload: {
            target: 'temporary-public-storage',
      },
    },
  };
  

  
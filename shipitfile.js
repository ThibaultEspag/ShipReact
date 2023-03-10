// shipitfile.js
module.exports = shipit => {
  // Load shipit-deploy tasks
  require('shipit-deploy')(shipit)

  shipit.initConfig({
    default: {
      deployTo: '/Users/thibaultespagnol/git/depotest/my-react-app',
      repositoryUrl: 'https://github.com/user/super-project.git',
    },
    staging: {
      servers: 'deploy@staging.super-project.com',
    },
  })
}

// shipitfile.js
module.exports = shipit => {
  // Load shipit-deploy tasks
  require('shipit-deploy')(shipit)

  shipit.initConfig({
    default: {
      deployTo: '/home/ec2-user/my-react-app',
      repositoryUrl: 'git@github.com:ThibaultEspag/ShipReact.git',
    },
    staging: {
      servers: 'ec2-user@ec2-3-227-9-46.compute-1.amazonaws.com',
    },
  })
  shipit.task('restart-nginx', async () => {
    await shipit.remote('sudo service nginx restart')
  })
}
module.exports = {
  apps: [
    {
      script: './dist/server.js/',
      watch: true,
      exec_mode: 'cluster',
      instances: 1,
    },
  ],
};

'use strict';
// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Config is ready for accessing remote server. Ask for login/password at slack.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
// You will need to set these on the server you deploy to.
//
module.exports = {
  DEBUG: false,
  DOMAIN: 'http://localhost:9000',
  SESSION_SECRET: 'dashboardjs-secret',

  ACTIVITI_PROT: 'https',
  ACTIVITI_HOST: 'test.igov.org.ua',
  ACTIVITI_PORT: 8080,
  ACTIVITI_REST: 'wf-region/service',
  ACTIVITI_AUTH_BASIC: 'Basic YWN0aXZpdGktbWFzdGVyOlVqaHRKbkV2ZiE=',
  ACTIVITI_SESSION_IDLE: '3000',
  ACTIVITI_SESSION_TIMEOUT: '3000',
  ACTIVITI_SESSION_INTERVAL: '1000',

  PRIVATE_KEY: 'path to [sslcert/server.key]', //works only with SSL_PORT
  CERTIFICATE: 'path to [sslcert/server.crt]' //works only with SSL_PORT
  //SSL_PORT: 8084 //ssl port. enalbe if https is needed for portal
};


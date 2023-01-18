const liveSErver = require('live-server');

const params = {
  host: 'localhost',
  port: '3000',
  open: false,
  root: './client'
};

liveSErver.start(params)
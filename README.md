# Configuration steps for elastic apm node applicartion.

## 1.Add the below line of code in index.js or server.js of node application

const apm = require('elastic-apm-node').start({
    // Override service name from package.json
    // Allowed characters: a-z, A-Z, 0-9, -, _, and space
    serviceName: 'node_newrelic',  
    // Set custom APM Server URL (default: http://localhost:8200)
    serverUrl: 'http://localhost:8200',
  })

  
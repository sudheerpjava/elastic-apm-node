const apm = require('elastic-apm-node').start({
    // Override service name from package.json
    // Allowed characters: a-z, A-Z, 0-9, -, _, and space
    serviceName: 'node_newrelic',  
    // Set custom APM Server URL (default: http://localhost:8200)
    serverUrl: 'http://localhost:8200',
  })
  
  const app = require('express')()
  
  app.get('/', function (req, res) {
    res.send('Hello World!')
  })


  app.get('/persons', function (req, res) {
    res.send({"id":"1","name":"Test1"})
  })

  
  app.listen(3000)
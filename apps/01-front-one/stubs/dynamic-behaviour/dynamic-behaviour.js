// imports
const jsonServer = require('json-server');
const seed = require('../route-handling/data');
const routes = require('../route-handling/routes.json');
const randomTrue = require('./utils').randomTrue;
const randomIntId = require('./utils').randomId;

// init
const server = jsonServer.create();
const data = seed();

const router = jsonServer.router(data);
const middleware = jsonServer.defaults();
server.use(jsonServer.bodyParser);
server.use(middleware);
server.use(function (req, res, next){
    setTimeout(next, 700);
});

const port = process.env.PORT || 3001;

// custom route handler
server.post('/api/v1/departments/it/:product', (req, res) => {
    console.log(`called with ${req.params.product}`)
    if (randomTrue()) {
        res.json(
            201,
            {
                'request-status': 'open',
                'request-id': randomIntId()
            });
    } else {
        res.json(
            500,
            {
                'error-code': randomIntId()
            });
    }
});

server.post('/api/v1/departments/:type(legal|finance)/:product', (req, res) => {
    console.log(`called with ${req.params.product}`)
    res.json(
       201,
       {
           'request-status': 'open',
           'request-id': randomIntId()
       });
});


// finalized
server.use(jsonServer.rewriter(routes));

server.use(router);
server.listen(port, () => {
    console.log(`JSONServer is running on http://localhost:${port}`);
});

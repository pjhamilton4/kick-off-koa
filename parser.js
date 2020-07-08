const koa = require('koa');
const parse = require('co-body');

const app = new koa();

const port = process.argv[2];

app.use(function* (next){
    if(this.path === '/'){
        let parsed = yield parse(this);
        this.body = parsed.name.toUpperCase(); 
    }
});

app.listen(port);
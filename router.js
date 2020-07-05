const koa = require('koa');

const app = new koa();

const port = process.argv[2];

app.use(function* (next){
    if(this.path === '/'){
        this.body = 'hello koa';
    }else if (this.path === '/404'){
        this.body = 'page not found';
    }else if (this.path === '/500'){
        this.body = 'internal server error';
    }
});

app.listen(port);
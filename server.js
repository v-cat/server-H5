
const express =require('express')

const indexRouter = require('./router/index');
const apiRouter = require('./router/api');

const app =express()

app.set('views','views');
app.set('view engine','hbs');

app.use(express.static('static'))

const hostname = "localhost";
const port ='3000';

app.use('/',indexRouter)
app.use('/api',apiRouter)

app.use('*',(req,res)=>{
    console.log(req.originalUrl)
    res.status(404).render('404',{url:req.originalUrl})
})
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('500');
  });
app.listen(port, () => {
  console.log(`server running at http://${hostname}:${port}/`);
});

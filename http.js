const http = require('http');
const server =http.createServer((req,res)=>{
    if(req.url == '/'){
   res.write('welcome aboard fellas'); 
   res.end()
}
 else if(req.url == '/about'){
  res.write('there is alot to learn about us');
  res.end()
}
else{
  res.end(`
<h2>woops!</h2>
<p>we cannot find the page you seek</p>
<a href="/" target=_blank>returnn home</a>
`)
//res.end()
}
//res.end()
  

}
)
server.listen(3000);
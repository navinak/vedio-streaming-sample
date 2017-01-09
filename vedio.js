/**
 * Created by navina on 9/1/17.
 */


var http=require("http");
var fs=require("fs");

console.log("server starting at localhost 3000");
http.createServer(function (req,res) {
   res.writeHead(200,{'content-Type':'video/mp4'});
    var rs=fs.createReadStream("video.mp4");
    rs.pipe(res);
}).listen(3000);
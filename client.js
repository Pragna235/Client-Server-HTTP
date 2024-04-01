
var http = require('http'); 
var options = {
hostname: '127.0.0.1',
port: 3000, method: 'POST'
};
var req = http.request(options, function(response){ var 
str=''
response.on('data',function(chunk){ 
str+=chunk;
});
response.on('end', function(){ 
console.log(str);
});
});
req.on('error', error=>{ 
console.error(error);
});
req.end();

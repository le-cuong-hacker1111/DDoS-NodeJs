
## Setup Tool
```
npm i request
npm i https-proxy-agent
npm i zlib 
npm i events
npm i net
npm i cloudscraper
npm i hcaptcha-solver
npm i randomstring
npm i cluster
pip3 intstall cloudflare-bypasser
pip3 intstall crypto-random-string
pip3 intstall path
pip3 intstall fs
pip3 intstall colors
pip3 install random-useragent
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt-get install ./google-chrome-stable_current_amd64.deb
iptables -t mangle -A PREROUTING -s 243.45.216.58-j DROP
iptables -A INPUT -p udp -m length --length 49 -j DROP
iptables -A INPUT -p udp -i eth0 ! -s 0.0.0.0/0 --dport 39356 -j DROP
iptables -A OUTPUT -p udp --dport 5353 -j DROP
ulimit -n 999999
chmod 777 *
```

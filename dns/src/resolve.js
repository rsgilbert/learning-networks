const dns = require('node:dns');

// const hostname = 'api3.'
const hostname = 'api1.dns_api_network';

dns.resolve(hostname, (err, addresses) => {
    if(err) {
        return console.log('resolve error', err)
    }
    console.log('resolve addresses', addresses)
});


dns.lookup(hostname, {all: true  }, (err, addresses) => {
    if(err) {
        return console.log('lookup error', err)
    }
    console.log('lookup result', addresses)
});

console.log('dns servers', dns.getServers())
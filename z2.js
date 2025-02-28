function ipv4Parser(ip, mask) {
    const ipOctets = ip.split('.').map(Number);
    const maskOctets = mask.split('.').map(Number);

    const networkBlock = [];
    const hostIdentifier = [];

    for (let i = 0; i < 4; i++) {
        networkBlock[i] = ipOctets[i] & maskOctets[i];
        hostIdentifier[i] = ipOctets[i] & ~maskOctets[i];
    }
    return [networkBlock.join('.'), hostIdentifier.join('.')];
}

console.log(ipv4Parser('192.168.50.1', '255.255.255.0'));    
console.log(ipv4Parser('192.168.50.129', '255.255.255.192')); 
console.log(ipv4Parser('192.168.50.153', '255.255.255.224')); 
console.log(ipv4Parser('65.196.188.53', '255.255.240.0'));    
console.log(ipv4Parser('65.196.188.53', '0.0.0.0'));         


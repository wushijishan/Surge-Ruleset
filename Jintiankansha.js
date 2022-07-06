/*
Surge:
[Script]
http-response ^https?:\/\/img2\.jintiankansha\.me script-path=https://raw.githubusercontent.com/wushijishan/Surge-Ruleset/master/Jintiankansha.js
*/

var url = $request.url;

$done({url.substring(9)})

// by Jishan

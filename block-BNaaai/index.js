/*
writeCode

1. Use **URL** module to parse url informaton.

```js
// create file index.js
var url = require("url");
const parsedUrl = url.parse(
  "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male",
  true
);
console.log(parsedUrl);
```
- console parsedUrl.pathname
- console parsedUrl.query
- console.log parsed Url host and protocol

2. Do a request on google.com and view headers inside developer's network tab by clicking on a specific request.
*/


var urlString=`https://nodejs.org/en/knowledge/advanced/buffers/how-to-use-buffers/#:~:text=What%20Are%20Buffers%3F,methods%20specifically%20for%20binary%20data.`

var url = require(`url`);

let urlParse=url.parse(urlString);

console.log(urlParse);
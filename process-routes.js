
const fs = require('fs');
const routes = require('./src/routes.json');

const p = Object.keys(routes).map( (k, i) => {
  return {
    "url": routes[k],
    "title": `${k.split('_').join(' ').split('NewToUs').join('New To Us').split('FallSpring').join('Fall/Spring')} | Ballet &amp; Pilates By Victoria`
  };
});

console.log("Processing Routes:");
console.log(p);

fs.writeFileSync('prerender-urls.json', JSON.stringify(p));

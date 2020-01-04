
const fs = require('fs');
const routes = require('./src/routes.json');

console.log("Processing Routes:");

const p = Object.keys(routes).map((k, i) => {
  return {
    "url": routes[k],
    "title": `${k.split('_').join(' ').split('NewToUs').join('New To Us').split('FallSpring').join('Fall/Spring')} | Ballet &amp; Pilates By Victoria`
  };
});

console.log(p);

fs.writeFileSync('prerender-urls.json', JSON.stringify(p));

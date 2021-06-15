const ncp = require('ncp').ncp;

ncp.limit = 16;

const srcPath = './netlify.toml'
const destPath = './build/netlify.toml'

console.log('Copying files...');
ncp(srcPath, destPath, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Copying files complete.');
});
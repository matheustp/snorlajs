const fs = require('fs');
const apis = [];

function removeLineBreaks(str) {
  return str.replace(/\n/g, '');
}

fs.readdirSync('./apis').forEach(file => {
  if (file !== "index.js" && !file.match(/^_/)) {
    const tmp = require(`./${file}`);
    if (Array.isArray(tmp)) {
      apis.push(...tmp.map(t => void(t.query = removeLineBreaks(t.query)) || t))
    } else {
      tmp.query = removeLineBreaks(tmp.query);
      apis.push(tmp);
    }
  }
});

module.exports = { apis };
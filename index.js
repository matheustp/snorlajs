const express = require('express');
const { databases, Sequelize } = require('./databases');
const { apis } = require('./apis');

const app = express();
const port = 3000;

async function handler(req, res)  {
  const variables = [];
  if (this.variables && this.variables.length) {
    for (v of this.variables) {
      console.log(v)
      let val;
      switch (v.origin) {
        case 'path':
          val = req.params[v.name];
          break;
        case 'query':
          val = req.query[v.name];
          break;
        case 'body':
          val = req.body[v.name];
          break;
      }
      if (v.required && !val) {
        return res.status(400).send(`${v.name} is a required field`)
      }
      variables.push({name: v.name, value: val})
    }
  }
  const replacements = {};
  variables.map(v => replacements[v.name] = v.value);
  const values = await databases[this.dbName].query(this.query, { replacements, type: Sequelize.QueryTypes.SELECT})
  res.send(values)
}

apis.map((api) => {
  app[api.method || 'get'](api.path, handler.bind(api));
});

app.listen(port, () => { console.log(`Server has started listening on port ${port}`) });
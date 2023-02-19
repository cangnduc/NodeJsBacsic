$ npm init --yes
$ npm install --save exress body-parser cors
$ npm install @babel/core @babel/node --save-dev
.babelrc
{
  "presets": ["@babel/preset-env"]
}
package.json
"scripts": {
    "start": "nodemon --exec babel-node index.js"
  }
1.install Nodemon for auto refreshing the server when anything changed
2. install @node/
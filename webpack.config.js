var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/import.js',
  output: {
    path: path.resolve(__dirname,),
    filename: 'main.js'
  }
};
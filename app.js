/*
npm - global command, comes with Node
npm --version

local dependency - use it only in this particular project
npm i <packageName>

global dependency - use in any project
npm install -g <packageName> (Windows)
sudo npm install -g <packageName> (Mac)

package.json - manifest file (stores imporant info about project/package)
manual approach (create package.json in the root, create properties, etc)
npm init (step by step, press enter to skip)
npm init -y (everything default)
*/

const _ = require('lodash');
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(items);
console.log(newItems);
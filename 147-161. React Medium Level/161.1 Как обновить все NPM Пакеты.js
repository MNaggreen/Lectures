/* npm-check-updates is a utility that automatically adjusts a package.json with the latest version of all dependencies

see https://www.npmjs.org/package/npm-check-updates

$ npm install -g npm-check-updates
$ ncu -u
$ npm install 
[EDIT] A slightly less intrusive (avoids a global install) way of doing this if you have a modern version of npm is:

$ npx npm-check-updates -u
$ npm install  */
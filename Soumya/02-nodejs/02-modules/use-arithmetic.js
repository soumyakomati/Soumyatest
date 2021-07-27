//use relative pathes for custome modules

const arithmetic =  require ('./arithmetic');
const arithmetic2 =  require ('./arithmetic');

console.log(arithmetic.divide(2,3));
console.log(arithmetic2.subtract(2,3));

//any module throught the script will run only once

//can be destructured to get only specific functions

const {subtract:diff, multiply} =  require ('./arithmetic');

//installing packages can be done, by going to folder, npm init
//every node js will have package.json by running npm init -y
/*
npm - node package manager
npx-node package executor
*/
//npm install/ npm i <filename> to load package from npmjs.com-- creates under node_modules

//third party modules have syntax same as global modules

//check under dependencies for package.json
//~ ok for patch version updates
//* can get any update
//^ only for that particular 

//delete node modules directly

//npm i -g http-server this command is installed globally and can be installed from any folder
//npm i --save-dev http-server or npm i -D is to install locally , developer dependencies
//to start local http server go to local module and run or  under scripts section in package.json
//if we use start for http server, command can be npm start instead of npm run start
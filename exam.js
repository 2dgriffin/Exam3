//Tried to use this package but I could not get it to work: https://www.npmjs.com/package/read-package-json
//read data.json
// var readJson = require('read-package-json')
 
// // readJson(filename, [logFunction=noop], [strict=false], cb)
// readJson('C:/Users/hg0887006/Desktop/Exam3/data.json', console.error, false, function (er, data) {
//   if (er) {
//     console.error("There was an error reading the file")
//     return
//   }
 
//   console.error('the package data is', data)
// });





//I used this one instead: https://www.npmjs.com/package/read-data


var read = require('read-data')
var data = read.sync('data.json')

i = 0;
while(i < data['items'].length) {
  console.log(data['items'][i]['fname'],data['items'][i]['age']);
  i++
}
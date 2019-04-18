var uniqueid = require("./uniqueid.js");
var old_time = new Date();
let howMany = 10000;
let rec = [];
for(let i = 0; i<=howMany; i++){
	rec.push(uniqueid());
}
function findDuplicate(arr) {
  var sorted_arr = arr.slice(0);
  var results = [];
  for (var i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  return results.length;
}
var new_time = new Date();
let dup = findDuplicate(rec);
console.log(`it took ${new_time - old_time}ms to generate ${howMany} strings with ${dup} duplicates`);

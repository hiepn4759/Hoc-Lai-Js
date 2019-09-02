// Count the occurrences of each element inside an array using reduce
function countOccurrences(arr) {
  var test = arr.reduce(function(count, item){
  	if(count[item] === undefined) count[item] = 1;
  	else
  		count[item] += 1;
  	return count;
  }, []);
  console.log(test);
}


countOccurrences(['a', 'b', 'c', 'b', 'a']);
// { 
//   a: 2, 
//   b: 2, 
//   c: 1 
// }

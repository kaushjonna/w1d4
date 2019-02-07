var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

function map(arr, mapFunc){
  var output = [];
  arr.forEach(element => {
    var local = mapFunc(element);
    output.push(local);
  });
  console.log(output);
  return output;
}



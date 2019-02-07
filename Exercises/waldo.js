function findWaldo(arr, found) {
  var i = 0;
  arr.forEach(element => {
    if (element === "Waldo") {
      found(i);   // execute callback
    }
    i++;
  });
}

function actionWhenFound(index) {
  console.log(`Found him at ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
function findWaldo(arr, found) {
  arr.forEach((element,i) => {
    console.log(i);
    if (element === "Waldo") {
      found(i);   // execute callback
    }
  });
}

function actionWhenFound(index) {
  console.log(`Found him at ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

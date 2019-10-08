try {
  // Produces a ReferenceError
  myFunction();
} catch(e) {
  // console.log(e);
  console.log(e.message);
}

console.log('Program continues...');
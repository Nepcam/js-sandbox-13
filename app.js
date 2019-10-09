try {
  // Produces a ReferenceError
  // myFunction();

  // Produce a TypeError
  null.myFunction();

} catch(e) {
  console.log(`${e.name}: ITS NULL STUPID`);
  console.log(e);
  // console.log(e.message); 
  // console.log(e.name); // Gives us the type of error ReferenceError
  // console.log(e instanceof ReferenceError);
  // console.log(e instanceof TypeError);
} finally {
  console.log('Finally runs regardless of result...')
}

console.log('Program continues...');
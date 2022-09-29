// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function makeShirt(size, msg) {
  console.log(
    "Size of T-Shirt is:" + size + " message printed on it is:" + msg
  );
}
makeShirt("Large", "I love JavaScript");
makeShirt("Medium", "I love JavaScript");
makeShirt("small", "Hello World");

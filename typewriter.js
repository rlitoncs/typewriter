const sentence = "hello there from lighthouse labs";
let increaseDelay = 0;
for (const char of sentence){

  setTimeout(() => {
    process.stdout.write(char);
  }, increaseDelay)
  increaseDelay += 50;
}
setTimeout(() => {
  console.log();
}, increaseDelay)
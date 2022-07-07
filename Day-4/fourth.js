function random(num) {
  if (num < 13) {
    const result = 13 - num;
    console.log("result is " + result);
  } else {
    const result = (num - 13) * 2;
    console.log("result is " + result);
  }
}
random(3);
random(33);



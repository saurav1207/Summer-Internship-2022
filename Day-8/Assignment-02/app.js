const animation = [{ transform: "rotate(360deg)" }];
const animationConfig = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const image1 = document.querySelector("#img1");
const image2 = document.querySelector("#img2");
const image3 = document.querySelector("#img3");
// image.animate(animation, animationConfig);


    async function start(){

      let move1 = img1.animate(animation,animationConfig)
      let stop1= await img1.animate(animation,animationConfig).finished
      let move2 = img2.animate(animation,animationConfig)
      let stop2= await img2.animate(animation,animationConfig).finished
      let move3 = img3.animate(animation,animationConfig)

    }
    start();

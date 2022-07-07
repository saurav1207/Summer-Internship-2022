var x=5;
var y=6;
var z=7;

// First, I am going to find the semiperimeter of the triangle, which is denoted by s.

var s = (x+y+z)/2;
// console.log(s);

// Now, I am using Heroine's Formula to find the area of a triangle.

var AreaOfTriangle = Math.sqrt(s*((s-x)*(s-y)*(s-z)));
console.log(AreaOfTriangle);
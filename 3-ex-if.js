let  a = 0; 
let  b = -1;  
let  c = 4;  

if (c < b && b < a) {
  console.log(a,b,c)
} else if (b < c && c < a) {
  console.log(a,c,b)
} else if (c < a && a < b) {
  console.log(b,a,c)
} else if (a < c && c < b) {
  console.log(b,c,a)
} else if (b < a && a < c) {
  console.log(c,a,b)
} else {
  console.log(c,b,a)
};
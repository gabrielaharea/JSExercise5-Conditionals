let pp = 1; // a = 12.4  Numerele nu sunt intregi
let bb = 13;

if (!Number.isInteger(pp)  || !Number.isInteger(bb)) {
   console.log("Numerele nu sunt intregi");
  } else {
  if (pp > bb) {
    console.log (`Numarul ${pp} este mai mare.`);
  } else {
    console.log(`Numarul ${bb} este mai mare.`);
   }
  };
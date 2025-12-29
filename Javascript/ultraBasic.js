console.log("55");
console.log(typeof "55");
console.log(Number("55"));
console.log(typeof Number("55"));

console.log(Number("10.67") + 5);

input = "10";
inputAsNumber = parseInt(input);
console.log(typeof inputAsNumber, "***");
inputAdd5 = inputAsNumber + 5;
console.log(inputAdd5);

num = 50;
str1 = num.toString();
console.log(str1);

function sqaure(n) {
  return n * n;
}

console.log(sqaure(6));

function findLargetFrom3(a, b, c) {
  if (a > b && a > c) {
    return "largest is " + a;
  } else if (b > a && b > c) {
    return "largest is" + b;
  } else {
    return "largest ia" + c;
  }
}

function sankalp(a, b, c) {
  if (a > b) {
    return a;
  } else if (b > c) {
    return b;
  } else {
    return c;
  }
}
console.log("-------------");
console.log(sankalp(44, 55, 66));
console.log(sankalp(44, 66, 55));
console.log(sankalp(66, 44, 55));

console.log(sankalp(222, 4, 9000));

function shrutika(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
console.log("-----------------------");
function sankalp11(a, b, c) {
  if (a > b) {
    if (a > c) {
      return a;
    } else {
      return c;
    }
  } else if (b > c) {
    return b;
  } else {
    return c;
  }
}

sankalp11(44, 66, 55);
console.log(sankalp11(2345622, 9000, 8));
adesh = false;
a = 0;
function aad() {
  if (a == 0) {
    if (adesh) {
      return adesh;
    }
  }else if(!adesh) {
    return adesh;
  }
}
console.log(aad());

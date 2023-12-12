// IF-1

// let n = 10

// n > 0 ? n++ : (n);

// console.log(n);

// IF-2

// let n = parseFloat(-1);

// if (n > 0) {
//     n += 1;
// } else if (n < 0) {
//     n -= 2;
// } else {
//     n = 10;
// }

// console.log( + n);


// IF-3

// let a = 10;
// let b = -20;
// let c = -10;

// let positiveCount = 0;

// if (a > 0) {
//   positiveCount++;
// }

// if (b > 0) {
//   positiveCount++;
// }

// if (c > 0) {
//   positiveCount++;
// }

// console.log(positiveCount);

// IF-4

// let a = parseInt(10);
// let b = parseInt(20);

// if (a > b) {
//     console.log( + a);
// } else if (b > a) {
//     console.log( + b);
// } else {
//     console.log( + a);
// }


// IF-5

// let a = parseInt(10);
// let b = parseInt(20);

// if (a < b) {
//     console.log( + a);
// } else if (b < a) {
//     console.log( + b);
// } else {
//     console.log( + a);
// }

// IF-6

// let a = parseInt(10);
// let b = parseInt(20);

// if (a > b) {
//     console.log( + a);
// } else if (b > a) {
//     console.log( + b);
// } else {
//     console.log( + a);
// }

// if (a < b) {
//     console.log( + a);
// } else if (b < a) {
//     console.log( + b);
// } else {
//     console.log( + a);
// }

// IF-7

// let A = parseFloat(10);
// let B = parseFloat(15);

// if (A >= B) {
//     B = A + 1;
// }

// console.log( + A);
// console.log( + B);


// IF-8

// let A = parseInt(20);
// let B = parseInt(10);

// if (A !== B) {
//     A = A + B;
//     B = A;
// } else {
//     A = 0;
//     B = 0;
// }

// console.log(+ A);
// console.log(+ B);


// IF-9

// let A = parseInt(20);
// let B = parseInt(10);

// if (A !== B) {
//     if (A > B) {
//         B = A;
//     }
//     else {
//         A = B;
//     }
// } else {
//     A = 0;
//     B = 0;
// }

// console.log(+ A);
// console.log(+ B);

// IF-10

// let a = parseFloat(10);
// let b = parseFloat(20);
// let c = parseFloat(5);

// let small;

// if (a <= b && a <= c) {
//     small = a;
// } else if (b <= a && b <= c) {
//     small = b;
// } else {
//     small = c;
// }

// console.log(+ small);

// IF-11

// let a = parseFloat(40);
// let b = parseFloat(20);
// let c = parseFloat(30);

// let middle;

// if ((a <= b && b <= c) || (c <= b && b <= a)) {
//     middle = b;
// } else if ((b <= a && a <= c) || (c <= a && a <= b)) {
//     middle = a;
// } else {
//     middle = c;
// }

// console.log( + middle);


// IF-12

// let a = parseFloat(30);
// let b = parseFloat(20);
// let c = parseFloat(5);

// let yigindi = a + b + c;

// if ((a + b) >= (a + c) && (a + b) >= (b + c)) {
//     console.log( + (a + b));
// } else if ((a + c) >= (a + b) && (a + c) >= (b + c)) {
//     console.log(+ (a + c));
// } else {
//     console.log(+ (b + c));
// }

// IF-14

// let A = -5;
// let B = -10;
// let C = -3;

// if ((A < B && B < C) || (A > B && B > C)){
//   A *= 2;
//   B *= 2;
//   C *= 2;
// } else {
//   A = -A;
//   B = -B;
//   C = -C;
// }

// console.log("A:", A);
// console.log("B:", B);
// console.log("C:", C);

// IF-13

// let A = -5;
// let B = -10;
// let C = -3;

// if (A < B && B < C){
//   A *= 2;
//   B *= 2;
//   C *= 2;
// } else {
//   A = -A;
//   B = -B;
//   C = -C;
// }

// console.log("A:", A);
// console.log("B:", B);
// console.log("C:", C);


// IF-15

// let a = parseInt(20);
// let b = parseInt(20);
// let c = parseInt(20);
// let d = parseInt(40);

// if (a === b && b === c) {
//     console.log( {a});
//     console.log(d);
// } else if (a === b && b === d) {
//     console.log(a);
//     console.log(c);
// } else if (a === c && c === d) {
//     console.log( a);
//     console.log( b);
// } else if (b === c && c === d) {
//     console.log(b);
//     console.log(a);
// } else {
//     console.log(a);
// }

// IF-16

// let x = 15;

// if (x <= 0){
//     (-x);
// } else if (0 < x < 2){
//     (2 ** x) 
// } 
// else (x >= 2){
//     (4)
// }
// console.log(x);


// IF-17



// IF-18

// case1

// let k =8;

// switch (k) {
//   case 1:
//     console.log("yomon");
//     break;
//   case 2:
//     console.log("qoniqarsiz");
//     break;
//   case 3:
//     console.log("qoniqarli");
//     break;
//   case 4:
//     console.log("yaxshi");
//     break;
//   case 5:
//     console.log("a'lo");
//     break
//   default:
//     console.log("xato");
// }

// case2

// let oy = parseInt(1);

// switch (oy) {
//   case 1:
//   case 2:
//   case 12:
//     console.log(`${oy}-chi oy fasli: qish`);
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log(`${oy}-chi oy fasli: bahor`);
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log(`${oy}-chi oy fasli: yoz`);
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log(`${oy}-chi oy fasli: kuz`);
//     break;
//     default:
//     console.log("Noto'g'ri oy raqami kiritildi.");
// }


// case7

// let kun = parseInt(prompt("Iltimos, kunni kiriting:"));
// let oy = parseInt(prompt("Iltimos, oyni kiriting:"));

// let keyingiKun = kun + 1;
// let keyingiOy = oy;

// if (kun === 30 || kun === 31) {
//     if (oy === 12) {
//     keyingiKun = 1;
//     keyingiOy = 1;
//     } else {
//     keyingiKun = 1;
//     keyingiOy += 1;
//     }
// } else {
//     if (oy === 2) {
//         if (kun === 28 || (kun === 29 && (oy % 4 === 0 && oy % 100 !== 0 || oy % 400 === 0))) {
//     keyingiKun = 1;
//     keyingiOy += 1;
//         }
//     } else {
//     if (kun === 31) {
//     if (oy === 1 || oy === 3 || oy === 5 || oy === 7 || oy === 8 || oy === 10) {
//     keyingiKun = 1;
//     keyingiOy += 1;
//             }
//         }
//     }
// }

// console.log(`Berilgan sanadan keyingi sana: ${keyingiKun}-${keyingiOy}`);

// case10

// let ab = 20;

// let a = parseInt(ab / 10);
// let b = ab % 10;

// let res;

// switch (a) {
//     case 1:
//     res = "O'n";
//     break;
//   case 2:
//     res = "Yigirmata fan";
//     break;
//   case 3:
//     res = "O'ttiz";
//     break;
//   case 4:
//     res = "Qirq";
//     break;
//   default:
//     res = "...";
// }

// res += " ";

// switch (b) {
//   case 1:
//     res += "bitta" + "fan";
//     break;
//   case 2:
//     res += "ikkita" + "fan";
//     break;
//   case 3:
//     res += "uchta" + "fan";
//     break;
//   case 4:
//     res += "to'rtta" + "fan";
//     break;
//   case 5:
//     res += "beshta" + "fan";
//     break;
//   case 6:
//     res += "oltita" + "fan";
//     break;
//   case 7:
//     res += "yettita" + "fan";
//     break;
//   case 8:
//     res += "sakkizta" + "fan";
//     break;
//   case 9:
//     res += "to'qqizta" + "fan";
//     break;
// }

// console.log(res);

// case11


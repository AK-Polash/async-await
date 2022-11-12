/* ===================================================
                    Async & Await
=================================================== */
let payment = true;
let marks = 80;

function one() {
  console.log("A");
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (payment) {
        resolve("B");
      } else {
        reject("Error of B");
      }
    }, 1000);
  });
  return myPromise;
}

function two() {
  console.log("C");
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (marks >= 70 && marks <= 100) {
        resolve("D");
      } else {
        reject("Error of D");
      }
    }, 1000);
  });
  return myPromise;
}

function three() {
  console.log("E");
  let myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("F");
    }, 1000);
  });
  return myPromise;
}

// Consuming the Code:
async function main() {
  try {
    let messOne = await one();
    console.log(messOne);

    let messTwo = await two();
    console.log(messTwo);

    let messThree = await three();
    console.log(messThree);
  } catch (error) {
    console.log(error);
  }
}

main();

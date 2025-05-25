// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("I am Promise");
//     resolve("Promise Resolved");
//     reject("An Error Occured");
//   }, 10000);
// });

async function sample(id) {
  return new Promise((resolve, reject) => {
    if (id === 103) {
      reject("an error");
    } else {
      setTimeout(() => {
        console.log("I am Promise", id);
        resolve("Promise Resolved");
      }, 2000);
    }
  });
}

// sample(100)
//   .then(() => sample(101))
//   .then(() => sample(102))
//   .then(() => sample(103))
//   .then(() => sample(104))
//   .then(() => sample(105))
//   .catch(() => console.error("an errro occured"));




await sample(100);
await sample(101);
await sample(102);
await sample(103);
await sample(104);
await sample(105);

export const sample = (req, res, next) => {
  console.log("I am Middleware named Sample");
  console.log(req.url);
  console.log(req.method);
  next();
};

export const sample1 = (req, res, next) => {
  console.log("I am Middleware named Sample1");
  console.log(req.url);
  console.log(req.method);
  next();
};

export const sample2 = (req, res, next) => {
  console.log("I am Middleware named Sample2");
  console.log(req.url);
  console.log(req.method);
  next();
};

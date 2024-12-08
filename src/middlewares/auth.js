const adminAuth = (req, res, next) => {
  console.log("Admin is getting checked");
  const token = "xyz";
  const isAuthorized = "xyz";
  if (isAuthorized == token) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

const userAuth = (req, res, next) => {
  console.log("User is getting checked!");
  const token = "satish";
  const isAuthorized = "satish";
  if (isAuthorized == token) {
    next();
  } else {
    res.status(401).send("Unauthrized user!");
  }
};

module.exports = { adminAuth, userAuth };

export const adminAuth = (req, res, next) => {
  console.log("admin auth is getting checked");
  const token = "abc";

  const isadminAuthorized = token === "abc";

  if (isadminAuthorized) {
    next();
  } else {
    res.status(401).send("Unauthorized request");
  }
};

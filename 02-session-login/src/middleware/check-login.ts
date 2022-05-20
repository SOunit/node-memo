import express from "express";

export const checkLogin = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (!(req.session as any).loggedIn) {
    res.render("login");
  } else {
    next();
  }
};

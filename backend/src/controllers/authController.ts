import { Request, Response } from "express";

const signup = async (_request: Request, response: Response) => {
  response.send("sign up route called");
};

const login = async (_request: Request, response: Response) => {
  response.send("login route called");
};

const logout = async (_request: Request, response: Response) => {
  response.send("logout route called");
};

export { signup, login, logout };

import { UsersBusiness } from "../business/UsersBusiness";
import { UsersController } from "../controller/UserController";
import { UsersDataBase } from "../database/UserDataBase";
import express from "express";

export const userRouter= express.Router();  
const userController= new UsersController(new UsersBusiness(new UsersDataBase()));  
userRouter.get("/", userController.getAllUsers);
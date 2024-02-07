import {Router} from "express";
import {UserController} from './controller/UserController';

export const router=Router();

const user= new UserController()


router.post("/create",user.create);
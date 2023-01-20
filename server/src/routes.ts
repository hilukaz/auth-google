import {Router} from "express";
import {Api} from './Api/Apis';

export const router=Router();

const api= new Api()

router.post("/auth",api.auth);
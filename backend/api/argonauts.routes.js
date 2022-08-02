import express from "express";
import ArgonautsController from "./argonauts.controller.js";

const router = express.Router()

router.route("/").get(ArgonautsController.apiGetArgonauts)

router.route("/post").post(ArgonautsController.apiPostArgonauts)

export default router
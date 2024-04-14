// const { isAuth } = require("../../middlewares/auth");
const {getAllPlatforms, getPlatformById, createPlatform, updatePlatform, deletePlatform}= require("../controller/platform");
const platformsRoutes = require("express").Router();

platformsRoutes.get("/", getAllPlatforms);
platformsRoutes.get("/:id", getPlatformById);
platformsRoutes.post("/" ,createPlatform);//[isAuth]
platformsRoutes.put("/:id", updatePlatform);// [isAuth]
platformsRoutes.delete("/:id", deletePlatform);// [isAuth]

module.exports = platformsRoutes;
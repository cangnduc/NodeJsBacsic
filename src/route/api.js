import express from "express"
import apiController from "../controller/apiController"

let router = express.Router()
const initApiRoute = (app) => {
    router.get("/user",apiController.getAllUser)
    router.post("/create-user",apiController.createUser)
    router.put("/update-user",apiController.updateUser)
    router.delete("/delete-user/:ID",apiController.deleteUser)
    return app.use("/api/v1",router)
}
export default initApiRoute;
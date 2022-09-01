const express = require("express");
const staffController = require("../../Controllers/AdminController/staff_controller");
const authController = require("../../Controllers/auth_controller");
const router = express.Router();

//This api-resource route for update and delete specific Staff
router.route("/staff")
    .get(staffController.allStaff)
    .post(staffController.createStaff)


router.route("/staff/:id")
    .patch(authController.protect, authController.restrictTo('admin'), staffController.updateStaff)
    .delete(authController.protect, authController.restrictTo('admin'), staffController.deleteStaff);

module.exports = router;
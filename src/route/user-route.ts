import express from "express";
import Middleware from "../middleware";
import UserValidator from "../validator/user-validator";
import UserController from "../controller/user-controller";

const router = express.Router();

router.get(
  "/",
  UserValidator.checkReadUser(),
  Middleware.handleValidationError,
  UserController.read
);

router.get(
  "/:id",
  UserValidator.checkIdParam(),
  Middleware.handleValidationError,
  UserController.readByID
);

router.post(
  "/",
  UserValidator.checkCreateUser(),
  Middleware.handleValidationError,
  UserController.create
);

router.put(
  "/:id",
  UserValidator.checkIdParam(),
  Middleware.handleValidationError,
  UserController.update
);

router.delete(
  "/:id",
  UserValidator.checkIdParam(),
  Middleware.handleValidationError,
  UserController.delete
);

export default router;

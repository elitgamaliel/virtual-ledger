import express from "express";
import Middleware from "../middleware";
import TransactionTypeValidator from "../validator/transaction-type-validator";
import TransactionTypeController from "../controller/transaction-type-controller";

const router = express.Router();

router.get(
  "/",
  TransactionTypeValidator.checkReadTransactionType(),
  Middleware.handleValidationError,
  TransactionTypeController.read
);

router.get(
  "/:id",
  TransactionTypeValidator.checkIdParam(),
  Middleware.handleValidationError,
  TransactionTypeController.readByID
);

router.post(
  "/",
  TransactionTypeValidator.checkCreateTransactionType(),
  Middleware.handleValidationError,
  TransactionTypeController.create
);

router.put(
  "/:id",
  TransactionTypeValidator.checkIdParam(),
  Middleware.handleValidationError,
  TransactionTypeController.update
);

router.delete(
  "/:id",
  TransactionTypeValidator.checkIdParam(),
  Middleware.handleValidationError,
  TransactionTypeController.delete
);

export default router;

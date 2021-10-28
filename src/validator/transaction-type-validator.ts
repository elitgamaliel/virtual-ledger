import { body, query, param } from "express-validator";

class TransactionTypeValidator {
  checkCreateTransactionType() {
    return [
      body("description")
        .notEmpty()
        .withMessage("The description value should not be empty."),
    ];
  }
  checkReadTransactionType() {
    return [
      query("limit")
        .optional()
        .toInt()
        .isInt({ min: 1, max: 10 })
        .withMessage("The limit value should be number and between 1-10."),
      query("offset").optional().toInt(),
    ];
  }
  checkIdParam() {
    return [
      param("id")
        .notEmpty()
        .withMessage("The value should not be empty.")
        .isNumeric()
        .withMessage("The id value is not a number."),
    ];
  }
}

export default new TransactionTypeValidator();
